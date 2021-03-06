import React, { Component, Fragment } from "react";
import Contact from "./Contact";
import{Consumer} from'../../context'
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

return(

  // Consumer = celui qui utilise donc ici Liste.JS
<Consumer>
{

  value =>{// onpeut changer le nom mais fait référence a Value de Context.js value = this.state

return(
<Fragment>

<h1 className="text-center mb-3 ">Vos Contacts</h1>
        {value.infoContacts.map(elem => (
          <Contact
            id={elem.id}
            key={elem.id}
            nom={elem.nom}
            email={elem.email}
            tel={elem.tel}
            //On l'appel depuis Contact.js

            //supprimeClick={() => this.supprime(elem.id)} Supprimer pourContexte
          />
        ))}
      </Fragment>
)
  }

}
</Consumer>

)
  }
}

export default Liste;
