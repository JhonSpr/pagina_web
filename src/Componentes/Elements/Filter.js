import React from "react";

const countries = [
  {
    value: "en-emision",
    name: "En emision",
  },
  {
    value: "mexico",
    name: "México",
  },
  {
    value: "uruguay",
    name: "Uruguay",
  },
  {
    value: "peru",
    name: "Perú",
  },
  {
    value: "argentina",
    name: "Argentina",
  },
];

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "En emision" };

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
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.name}
            </option>
          ))}
        </select>

        <input type="submit" />
      </form>
    );
  }
}
