import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(){
    return (
        <div>
            <h2> Lista </h2>
            <ul>
                <ItemComponent name="meu item" />
                <ItemComponent name="meu item 2" />
            </ul>
        </div>
    )
}