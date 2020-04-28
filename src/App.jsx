import React, { Component } from 'react'
import MyComponent from './Search'

const projects = [
    {id: '1', name: 'Bob', email: 'aa@aa.com', "keywords": ["reactjs", "javascript", "hooks", "filtering", "search"],},
    {id: '2', name: 'Foo', email: 'mm@mm.com', "keywords": ["mern"]}
  ]
  
export default class App extends Component {
    render() {
        return (
            <div>
                <MyComponent projects={projects} />
            </div>
        )
    }
}
