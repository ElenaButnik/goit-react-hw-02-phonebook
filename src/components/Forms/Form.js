import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    // console.log(e.target.name,e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: this.state.name,
      number: this.state.number,
    };

    //this.setState({ contact });

    this.props.addNewContact(obj);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  prodIdName = uuidv4();
  prodIdNumber = uuidv4();

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.prodIdName}>
            Name
            <input
              id={this.prodIdName}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor={this.prodIdNumber}>
            Number
            <input
              id={this.prodIdNumber}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
