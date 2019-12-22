import React, { Component } from "react"

class Form extends Component {

    // 保存 input 框中的内容
    state = {
        keyword: "",
        arr: ["a","b","c"]
    }

    // handleChange(e){
    //     let val = e.target.value
    //     this.setState({
    //         keyword: val,
    //         arr: [
    //             ...this.state.arr,
    //             val
    //         ],
    //         // arr: this.state.arr.concat(val)
    //     },()=>{
    //        console.log(this.state.keyword) 
    //     })
    // }

    handleChange(e){
        let val = e.target.value
        this.setState(state=>{
            return {
                keyword: val,
                arr: [
                    ...state.arr,
                    val
                ],
                // arr: this.state.arr.concat(val)
            }
        },()=>{
           console.log(this.state.keyword) 
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
        return (
            <>
                <input 
                    value={this.state.keyword} 
                    onChange={this.handleChange.bind(this)}
                    onKeyUp={this.handleKeyUp.bind(this)}
                    type="text"
                />
                {
                    this.state.arr.map((value,index)=>{
                        return (
                            <span key={value+index}>{ value }</span>
                        )
                    })
                }
                {
                    this.props.initValue
                }
            </>
        )
    }
}

export default Form