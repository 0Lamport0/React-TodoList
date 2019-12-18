import React, { Component } from "react"

class Form extends Component {

    // 保存 input 框中的内容
    state = {
        keyword: ""
    }

    handleChange(e){
        this.setState({
            keyword: e.target.value
        })
    }

    handleKeyUp(e){
        // console.log(e.keyCode)
        if( e.keyCode === 13 ){
            this.props.onReceiveKeyWord(this.state.keyword)
            this.state.keyword = "" 
        }
    }

    render(){
        return <input 
                    value={this.state.keyword} 
                    onChange={this.handleChange.bind(this)}
                    onKeyUp={this.handleKeyUp.bind(this)}
                    type="text"
                />
    }
}

export default Form