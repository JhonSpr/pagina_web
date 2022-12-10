import React, { Component } from "react";
import { Disqus } from "./disqus";

class Button extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <div>
        <div className="col-md-6  mb-2">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            {/* Este es el boton 1 */}
            <button
              type="button"
              id="btn-nquote"
              className=""
              onClick={() => this.handleChange(false)}
            >
              Mostrar comentarios
            </button>
          </div>
        </div>
        <span>
          {this.state.checked ? (
            <Disqus />
          ) : (
            <div>
              <Disqus />
            </div>
          )}
        </span>
      </div>
    );
  }
}

export default Button;
