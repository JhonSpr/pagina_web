import React from "react";

const Estados = [
  {
    value: "anime",
    name: "Estado",
  },
  {
    value: "emisiones",
    name: "Emisiones",
  },
  {
    value: "proximamente",
    name: "Proximos",
  },
];
const Tipos = [
  {
    value: "animes",
    name: "Tipo: ",
  },
  {
    value: "emisiones",
    name: "Emisiones",
  },
  {
    value: "proximamente",
    name: "Proximos",
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
          value={`Seleccionado: ` + this.state.value}
          onChange={this.handleChange}
          className="multiselect-native-select"
        >
          {Estados.map((estado) => (
            <option key={estado.value} value={estado.value}>
              <span className="multiselect-selected-text">{estado.name}</span>
              <i className="fas fa-chevron-down"></i>
            </option>
          ))}
        </select>
        <select
          value={`Seleccionado: ` + this.state.value}
          onChange={this.handleChange}
          className="multiselect-native-select"
        >
          {Tipos.map((type) => (
            <option key={type.value} value={type.value}>
              <span className="multiselect-selected-text">{type.name}</span>
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
