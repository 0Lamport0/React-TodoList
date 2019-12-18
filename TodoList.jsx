import React,{ Component } from "react"

import Form from "./Form"
import List from "./List"

class TodoList extends Component  {

    state = {
        keyword: ""
    }

    handleReceiveKeyWord(keyword){
        // console.log(keyword)
        this.setState({
            keyword
        })
    }

    render(){
        return (
            <>
                <Form onReceiveKeyWord={this.handleReceiveKeyWord.bind(this)}></Form>
                <List keyword={this.state.keyword}></List>
            </>
        )
    }
}

export default TodoList