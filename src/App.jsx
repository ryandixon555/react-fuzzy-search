import React, { Component } from 'react'
import MyComponent from './Search'

const customers = [
    {id: '1', name: 'Bob', email: 'aa@aa.com'},
    {id: '2', name: 'Foo', email: 'mm@mm.com'}
  ]
  
export default class App extends Component {
    render() {
        return (
            <div>
                <MyComponent customers={customers} />
            </div>
        )
    }
}
