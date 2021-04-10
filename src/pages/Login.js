/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fullName: "",
      loginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePass = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit(event) {
    const { email, password } = this.state;
   
    
    axios
      .post(
        "http://localhost:8080/api/login",
        { 
          
          email: email,
          password: password,
      
      },
        {
          headers: {
            accept: "*/*",
            "content-type": "application/json",
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        
        localStorage.setItem('fullName', response.data.fullName);
        localStorage.setItem('accessToken', response.data.accessToken);
        if (response.data) {
          window.location.href = "http://localhost:3000"
        }
        
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {/* <!-- Normal Breadcrumb Begin --> */}
        <section
          className="normal-breadcrumb set-bg"
          style={{ backgroundImage: "url('assets/img/hero/game.jpg')" }}
        >
          {/* <img src="assets/img/normal-breadcrumb.jpg" alt="" /> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="normal__breadcrumb__text">
                  <h2>Login</h2>
                  <p>Welcome to the official Crazy House</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Normal Breadcrumb End --> */}

        {/* <!-- Login Section Begin --> */}
        <section className="login spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login__form">
                  <h3>Login</h3>
                  <form onSubmit={this.handleSubmit}>
                    <div className="input__item">
                      <input
                        type="email"
                        placeholder="Email address"
                        value = {this.state.email}
                        onChange={this.handleChange}
                       required/>
                      <span className="icon_mail"></span>
                    </div>
                    <div className="input__item">
                      <input
                        type="password"
                        placeholder="Password"
                        value = {this.state.password}
                        onChange={this.handlePass}
                      />
                      <span className="icon_lock"></span>
                    </div>
                    <button
                      type="submit"
                      className="site-btn"
                    
                    >
                      Login Now
                    </button>
                  </form>
                  <a href="#" className="forget_pass">
                    Forgot Your Password?
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login__register">
                  <h3>Dont’t Have An Account?</h3>
                  <a href="#" className="primary-btn">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Login;
