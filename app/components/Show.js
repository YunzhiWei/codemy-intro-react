import React from "react";

import ContactInfo from './data';

class Show extends React.Component {
  componentWillMount() {
    console.log("ContactInfo", ContactInfo);

    let items = ContactInfo.filter(
      c => c.id === parseInt(this.props.params.contactId, 10)
    );

    console.log("items", items);
    console.log("len", items.length);

    if (items.length >= 1) {
      this.setState({
        contact: items[0]
      });
    }
    else {
      this.setState({
        contact: {
          name: ""
        }
      });
    }
  }

  render() {
    return(
      <div id='Show'>
        <h1>{this.state.contact.id}</h1>
        <h2>{this.state.contact.name}</h2>
        <h3>{this.state.contact.email}</h3>
      </div>
    )
  }
}

export default Show;
