import React,{ Component } from "react"

class List extends Component {

    state = {
        list: []
    }

    handleClick(index){
        this.state.list.splice(index,1)
        this.setState({})
    }

    UNSAFE_componentWillReceiveProps(props){
        // console.log(props)
        this.setState({
            list:[
                ...this.state.list,
                props.keyword
            ]
        })
    }

    render(){
        return (
            <ul>
                {
                    this.state.list.map((value,index)=>{
                        return (
                            <li key={value+index}>{value} <button style={{marginLeft:"10px"}} onClick={this.handleClick.bind(this,index)}>X</button></li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default List
