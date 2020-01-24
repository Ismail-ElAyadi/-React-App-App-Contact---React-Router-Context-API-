import React, { Component } from 'react';

const Context = React.createContext

//
export class Provider extends Component {


    state = {
        infoContacts: [
          {
            id: 1,
            nom: "René Doe",
            email: "jhi@gmail.com",
            tel: "655-555-555"
          },
          {
            id: 2,
            nom: "Legende Doe",
            email: "jhi@gmail.com",
            tel: "655-555-555"
          },
          {
            id: 3,
            nom: "Isma",
            email: "jhi@gmail.com",
            tel: "655-555-555"
          }
        ]
      }

      render(){
return (<Context.Provider value ={this.state}>
{this.props.childred}
</Context.Provider>)
      }
}

export const Consumer=Context.Consumer