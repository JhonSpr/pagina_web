import React from "react";

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(`Seleccionaste: ${event.target.value}`);
    this.setState({ value: event.target.value });
    setTimeout(() => console.clear(), 55000);
  }

  render() {
    return (
      <form action={"/" + this.state.value.toLowerCase().replace(/ /g, "-")}>
        <select
          value={this.state.value}
          onChange={"Seleccion:" + this.handleChange}
          className="select is-small is-orange"
        >
          <option>Estados</option>
          <option value="emisiones">En emision</option>
          <option value="finalizados">Finalizados</option>
          <option value="Proximamente">Proximamente</option>
        </select>

        <select
          value={this.state.value}
          onChange={this.handleChange}
          className="select is-small"
        >
          <option>Tipo</option>
          <option value="TV">TV</option>
          <option value="OVA">OVA</option>
          <option value="Screen">Pelicula</option>
        </select>

        <button type="submit" className="button is-small is-orange">
          <span class="fa fa-filter" aria-hidden="true"></span>filtrar
        </button>
      </form>
    );
  }
}
