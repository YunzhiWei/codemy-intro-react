import "./style.css";

import React from "react";
import { render } from "react-dom"

class HelloReact extends React.Component {
  render() {
    return(
      <div id='helloreact'>
        Hello from react
      </div>
    )
  }
}

render(
  <HelloReact />,
  document.getElementById('root-app')
)
