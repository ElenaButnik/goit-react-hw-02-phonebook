import { Component } from "react";
import "./App.css";
import { Form } from "./components/Forms/Form"


class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    
  };

 addNewContact=(obj)=>{
  this.setState((prevState) => {
    return {
      contacts: [...prevState.contacts, obj],
    };
  });
 }

  render() {
    //console.log(this.state.name, this.state.number);
    return (
      <div className="App">
        <h1>Phonebook</h1>
       <Form addNewContact={this.addNewContact}/>
      </div>
    );
  }
}

export default App;
