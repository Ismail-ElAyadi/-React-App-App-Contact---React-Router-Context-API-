import React, { Component } from 'react';
import Contact from './Contact'

export class Liste extends Component {

    state = {
        infocontacts:[
            {
                id:1,
                nom:'René Doe',
                email:'jhi@gmail.com',
                tel:"655-555-555"
            },
            {
                id:2,
                nom:'Legende Doe',
                email:'jhi@gmail.com',
                tel:"655-555-555"
            },
            {
                id:3,
                nom:'Isma',
                email:'jhi@gmail.com',
                tel:"655-555-555"
            }
        ]
    }
    render() {
        return (
            <div>
                {this.state.infocontacts.map(el => (
                    <Contact
                    key={el.id}
                    nom={el.nom}
                    email={el.email}
                    tel={el.tel}/>
        
                ))}
            </div>
        );
    }
}

export default Liste;
