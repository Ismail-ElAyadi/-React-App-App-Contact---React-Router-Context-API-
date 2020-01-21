import React, { Component } from "react";

export class Contact extends Component {

  state = {
    show: true
  }
  montrerContact = () => {
    this.setState({

      show: !this.state.show

    })

  }

  render() {
    return (
      <div className="card card-body mb-3 text-center">
        <h4>
          {this.props.nom}&nbsp;{this.state.show ? (<i style={{ cursor: 'pointer' }} className='fas fa-sort-up' onClick={this.montrerContact}></i>) : <i style={{ cursor: 'pointer' }} className='fas fa-sort-down' onClick={this.montrerContact}></i>}
        </h4>
        {/* VERSION TERNAIRE*/}
        {this.state.show ? (
          <ul className="card card-body mb-3">
            <li className="list-group-item">Email:{this.props.email}</li>
            <li className="list-group-item">Téléphone:{this.props.tel}</li>
          </ul>) : null}






      </div>
    );
  }
}

export default Contact;
