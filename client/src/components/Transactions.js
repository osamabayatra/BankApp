import React, { Component } from 'react'
import Transaction from './Transaction';

export default class Transactions extends Component {

    constructor() {
        super()
        this.state = {
            transactions: []
        }
    }

    render() {
        let transactions = this.props.data
        return (
            <div>
                {transactions.map(t => {

                    return (
                        <Transaction removeTra={this.props.removeTra} key={t._id} transaction={t} />
                    )
                })}

            </div>
        )
    }
}
