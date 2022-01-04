import React, { Component } from 'react'
import '../styles/Breakdown.css'
export default class Breakdown extends Component {
    constructor() {
        super()
        this.state = {
            group: []
        }
    }

    getBreakDown = () => {

        fetch('http://localhost:3001/group')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // this.setState({
                //     transactions: data
                // })
            })
    }


    componentDidMount() {
        fetch('http://localhost:3001/group')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    group: data
                }, function () {
                    console.log(this.state.group);
                })
            })
    }

    render() {
        let categories = this.state.group
        return (
            <div className='breakdown-container'>
                <h3>Break Down Page</h3>

                {categories.map(c => {
                    return (
                        <div className='data'>
                            <span>{c._id}</span>
                            <span className={c.sum < 1 ? 'minus' : 'pos'}>{c.sum}</span>
                        </div>
                    )
                })}


            </div>
        )
    }
}
