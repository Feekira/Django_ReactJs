import React from 'react'

export default function ItemComponent(props){
    const status = props.status
    return(
        <div>
            <li>Item desc: {props.name } status:{status ? <p>Finalizado</p> : <p>Não Finalizado</p>}</li>
        </div>
    )
}