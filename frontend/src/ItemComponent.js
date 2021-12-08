import React from 'react'

export default function ItemComponent(props){
    return(
        <div>
            <li>Item desc: {props.name }</li>
        </div>
    )
}