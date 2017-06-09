import React from "react";

import { observer } from 'mobx-react';

@observer(['contacts'])
class Show extends React.Component {
  componentWillMount() {
      this.setState({
        contact: this.props.contacts.find(parseInt(this.props.params.contactId))
      });
  }

  render() {
    return(
      <div id='Show'>
        <h1>{this.state.contact.id}</h1>
        <h2>{`${this.state.contact.first_name} ${this.state.contact.last_name}`}</h2>
        <h3>{this.state.contact.email}</h3>
      </div>
    )
  }
}

export default Show;
