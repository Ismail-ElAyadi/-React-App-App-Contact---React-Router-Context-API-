import React, { Component, Fragment } from "react";
import Contact from "./Contact";

export class Liste extends Component {

  supprime = id => {
    // On Filtre l'id séléctionné
    const nvContacts = this.state.infoContacts.filter(elem => elem.id !== id);
    // On recré le tableau sans l'élément qui possédait l'id séléctionné
    this.setState({
      infoContacts: nvContacts
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.infoContacts.map(elem => (
          <Contact
            key={elem.id}
            nom={elem.nom}
            email={elem.email}
            tel={elem.tel}
            //On l'appel depuis Contact.js
            supprimeClick={() => this.supprime(elem.id)}
          />
        ))}
      </Fragment>

    );
  }
}

export default Liste;
