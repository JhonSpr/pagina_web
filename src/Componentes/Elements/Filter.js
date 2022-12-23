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
      <form
        action={
          "https://animekuns.netlify.app/" +
          this.state.value.toLowerCase().replace(/ /g, "-")
        }
      >
        <select
          value={this.state.value}
          onChange={this.handleChange}
          className="select"
        >
          <option>Estados</option>
          <option value="emisiones">En emision</option>
          <option value="finalizados">Finalizados</option>
          <option value="Proximamente">Proximamente</option>
        </select>

        <select
          value={this.state.value}
          onChange={this.handleChange}
          className="select"
        >
          <option>Tipo</option>
          <option value="TV">TV</option>
          <option value="OVA">OVA</option>
          <option value="Screen">Pelicula</option>
        </select>

        <button type="submit" className="button is-small is-orange">
          <span class="fa fa-filter" aria-hidden="true"></span>
        </button>
      </form>
    );
  }
}
