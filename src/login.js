import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email:"",
      password: "",
      formDisabled: false,
    };
  }
  //title, name, phone, email, password, address
  handleFormSubmit(event) {
    const { email, password} = this.state;
    event.preventDefault();
    
    this.setState({
      formDisabled: true,
    });
    axios
      .post("http://localhost:3001/login", {
        email, password
      })
      .then((response) => {
        console.log("response", response);
        this.setState({
          formDisabled: false,
        });
        this.setState({
           email:"", password:""
        });
        alert("Login Successful!");
      });
  }
  render() {
    return (
      <div>
        <h2>Login </h2>
        <form
          onSubmit={(event) => this.handleFormSubmit(event)}
          style={{
            padding: "40px",
            backgroundColor: "#eee",
          }}
        >
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
          
          <button
            disabled={this.state.formDisabled}
            type="submit"
            class="btn btn-primary mb-3"
          >
            Login
          </button>

          {this.state.formDisabled && (
            <p> Login.</p>
          )}
        </form>
        <br />
        <br />
        <div
          style={{
            padding: "40px",
          }}
        >
         
        </div>
      </div>
    );
  }
}

export default Login;