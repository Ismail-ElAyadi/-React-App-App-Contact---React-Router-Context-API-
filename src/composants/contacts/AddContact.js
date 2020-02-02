import React, { Component } from "react";

export default class AddContact extends Component {
  state = {
    nom: "",
    email: "",
    tel: ""
  };

onChange = e => this.setState({
    [e.target.name]: e.target.value
/* e.target.name = le name de l'input et on change la state avec la value de l'input .. so Smart :)  */


})

onSubmit = e => {
e.preventDefault()
console.log(this.state)
}
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Ajouter un contact</div>

        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="from-group">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Entrez un nom"
                name="nom"
                value={this.state.nom}
                onChange={this.onChange}
              />
            </div>
            <div className="from-group">
              <label htmlFor="e-mail">E-mail</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Entrez un e-mail"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="from-group">
              <label htmlFor="tel">Téléphone</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Entrez un numéro de téléphone"
                name="tel"
                value={this.state.tel}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Ajouter"
              className="btn btn-block btn-primary mt-3"
            />
          </form>
        </div>
      </div>
    );
  }
}
