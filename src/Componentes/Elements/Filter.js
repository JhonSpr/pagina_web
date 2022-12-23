import React from "react";

const Estados = [
  {
    value: "",
    name: "",
  },
  {
    value: "emisiones",
    name: ": Emisiones",
  },
  {
    value: "proximamente",
    name: ": Proximos",
  },
];
const Tipos = [
  {
    value: "",
    name: "",
  },
  {
    value: "type=[]=TV",
    name: ": TV",
  },
  {
    value: "type=[]=ova",
    name: ": OVA",
  },
  {
    value: "type=[]=pelicula",
    name: ": PELICULA",
  },
];

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "animes" };

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
        <select
          value={this.state.value}
          onChange={this.handleChange}
          className="multiselect-native-select"
        >
          {Estados.map((estado) => (
            <option key={estado.value} value={estado.value}>
              <span className="multiselect-selected-text">
                Status {estado.name}
              </span>
              <i className="fas fa-chevron-down"></i>
            </option>
          ))}
        </select>
        <select
          value={this.state.value}
          onChange={this.handleChange}
          className="multiselect-native-select"
        >
          {Tipos.map((type) => (
            <option key={type.value} value={type.value}>
              <span className="multiselect-selected-text">
                Type {type.name}
              </span>
              <i className="fas fa-chevron-down"></i>
            </option>
          ))}
        </select>

        <button type="submit" className="button is-small is-orange">
          <span class="fa fa-filter" aria-hidden="true">
            Filtrar
          </span>
        </button>
      </form>
    );
  }
}
