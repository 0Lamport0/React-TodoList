import React,{ Component } from "react"

import Form from "./Form"
import List from "./List"

class TodoList extends Component  {

    state = {
        keyword: "",
        initValue: "-Lamport"
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
                <Form 
                    onReceiveKeyWord={this.handleReceiveKeyWord.bind(this)}
                    initValue={this.state.initValue}
                ></Form>
                <List form={<Form />} keyword={this.state.keyword}></List>
            </>
        )
    }
}

export default TodoList