import React from "react";
import axios from "axios";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
     title:"",
      name: "",
      phone: "",
      email:"",
      password: "",
      address:"",
      formDisabled: false,
    };
  }
  //title, name, phone, email, password, address
  handleFormSubmit(event) {
    const { title, name, phone, email, password, address } = this.state;
    event.preventDefault();
    
    this.setState({
      formDisabled: true,
    });
    axios
      .post("http://localhost:3001/register", {
        title, name, phone, email, password, address
      })
      .then((response) => {
        console.log("response", response);
        this.setState({
          formDisabled: false,
        });
        this.setState({
            title:"", name:"", phone:"", email:"", password:"", address:""
        });
        alert("Registration Successful!");
      });
  }
  render() {
    return (
      <div>
        <h2>RegisterForm </h2>
        <form
          onSubmit={(event) => this.handleFormSubmit(event)}
          style={{
            padding: "40px",
            backgroundColor: "#eee",
          }}
        >
            <div className="mb-3">
            <label for="title" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="your title"
              value={this.state.title}
              onChange={(e) => {
                this.setState({
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="your name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">
              phone
            </label>
            <input
              type="Number"
              className="form-control"
              id="phone"
              placeholder="your phone"
              value={this.state.phone}
              onChange={(e) => {
                this.setState({
                  phone: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-3">
            <label for="email" className="form-label">
              email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="your email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({
                  email: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-3">
            <label for="password" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="your password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="address" className="form-label">
              address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="your address"
              value={this.state.address}
              onChange={(e) => {
                this.setState({
                  address: e.target.value,
                });
              }}
            />
          </div>

          <button
            disabled={this.state.formDisabled}
            type="submit"
            class="btn btn-primary mb-3"
          >
            Submit
          </button>

          {this.state.formDisabled && (
            <p> Form is being submitted please wait.</p>
          )}
        </form>
        <br />
        <br />
        <div
          style={{
            padding: "40px",
          }}
        >
          For data - <br />
          title - {this.state.title}
          <br />
          Name - {this.state.name}
          <br />
          email - {this.state.email}
          <br />
          phone - {this.state.phone}
          <br />
          password - {this.state.password}
          <br />
          address - {this.state.address}
        </div>
      </div>
    );
  }
}

export default RegisterForm;