import React from 'react';
import ListComponent from './ListComponent';

export default class UserList extends React.Component{

    state = { lists:[], loading:true }

    async componentDidMount(){
        
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        config.headers['Authorization'] = 'Token 46e7cc91a3643c6d9024e98e6f8d8e4f0ca1a48f'

        var url = 'http://localhost:8000/list/'
        const response = await fetch(url,config);
        const data = await response.json()
        console.log(data)
        this.setState({lists: data,loading:false})
    }


    render(){

        const dataApi = this.state.lists;
        
        return(
            <div>
                {dataApi.map(list => <ListComponent key={list.id} listName={list.name}/>)}
            </div>
        )
    }
}
