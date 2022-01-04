import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import React, { Component } from 'react'
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Breakdown from './components/Breakdown';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      balance: 0
    }

  }

  componentDidMount() {

    console.log('in componentDidMount App');
    fetch('http://localhost:3001/transactions')
      .then(response => response.json())
      .then(data => {
        this.setState({
          transactions: data
        })

      });
    this.getBalance()
  }

  removeTransaction = (id) => {

    fetch('http://localhost:3001/transaction', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          transactions: data
        })
        this.getBalance()

      })


  }

  addTransaction = (data) => {
    let obj = data.type === 'deposit' ? null : data.amount = '-'.concat(data.amount)
    data.amount = parseInt(data.amount)
    delete data.type
    fetch('http://localhost:3001/transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          transactions: data
        })
        this.getBalance()
      })

  }

  getBalance = async () => {

    await fetch('http://localhost:3001/sum')
      .then(res => res.json())
      .then(data => {

        if (data[0] == undefined)
          return

        this.setState({
          balance: data[0].balance
        })

      })


  }

  render() {
    let state = this.state

    return (

      <div className='App'>

        <Router>

          <div className='navbar-links'>
            <Link to="/">Transactions</Link>
            <Link to="/operations">Operations</Link>
            <Link to="/breakdown">BreakDown</Link>
          </div>

          {/*  the sum of the data’s amounts. */}
          <div className='money'> <span className={this.state.balance > 500 ? 'pos' : 'minus'}>Balance : $ {this.state.balance}</span></div>

          <Routes>
            <Route exact path="/operations" element={<Operations operation={this.addTransaction} />} />
            <Route exact path="/" element={<Transactions removeTra={this.removeTransaction} data={state.transactions} />} />
            <Route exact path="/breakdown" element={<Breakdown data={state.transactions} />} />
          </Routes>

        </Router>


      </div>

    )
  }
}

