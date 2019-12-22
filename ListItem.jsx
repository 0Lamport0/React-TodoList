import React from 'react'

export default (props)=>{
    return (
        <li>
            {props.value}
            <button style={{marginLeft:"10px"}} onClick={props.onItemClick.bind(this,props.index)}>X</button>
        </li>
    )
}