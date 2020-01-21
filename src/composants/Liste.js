import React, { Component } from 'react';
import Contact from './Contact'

export class Liste extends Component {

    state = {
        contacts:[
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
                {this.state.contacts.map(contact => (
                    <Contact
                    key={contact.id}
                    nom={contact.nom}
                    email={contact.email}
                    tel={contact.tel}/>
        
                ))}
            </div>
        );
    }
}

export default Liste;
