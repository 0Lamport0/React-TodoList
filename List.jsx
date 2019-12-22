import React,{ Component } from "react"

import PropTypes from 'prop-types'

import ListItem from './ListItem'

export default class List extends Component {

    static propTypes = {
        // keyword 是一个字符串类型，并且是必填的
        keyword: PropTypes.string.isRequired
    }

    // static defaultProps = {
    //     keyword:"112343241"
    // }

    state = {
        list: [1,2,3]
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
                            <ListItem 
                                key={value+index}
                                value={value}
                                index={index}
                                onItemClick={this.handleClick.bind(this)}
                            ></ListItem>
                        )
                    })
                }
            </ul>
        )
    }
}

// List.defaultProps = {
//     keyword:"123123"
// }

