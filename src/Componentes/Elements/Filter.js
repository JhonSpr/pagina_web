import React from "react";

const Estados = [
  {
    value: "emisiones",
    name: "En emision",
  },
  {
    value: "proximamente",
    name: "Proximos",
  },
];

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "en emisiones" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(`Seleccionaste ${event.target.value}`);
    this.setState({ value: event.target.value });
    setTimeout(() => console.clear(), 1000);
  }

  render() {
    return (
      <form
        action={
          "https://animekuns.netlify.app/" +
          this.state.value.toLowerCase().replace(/ /g, "-")
        }
      >
        <select value={this.state.value} onChange={this.handleChange}>
          <div className="btn-group">
            <button className="multiselect dropdown-toggle button is-small is-light">
              {Estados.map((estado) => (
                <option key={estado.value} value={estado.value}>
                  <span className="multiselect-selected-text">
                    {estado.name}
                  </span>
                  <i className="fas fa-chevron-down"></i>
                </option>
              ))}
            </button>
          </div>
        </select>

        <input type="submit" />
      </form>
    );
  }
}
