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
      registry: {
        email: "",
        password: "",
        rePassword: "",
        firstName: "",
        lastName: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegistrySubmit=this.handleRegistrySubmit.bind(this);
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
        localStorage.setItem("fullName", response.data.fullName);
        localStorage.setItem("id", response.data.userid);
        localStorage.setItem("accessToken", response.data.accessToken);
        if (response.data) {
          window.location.href = "http://localhost:3000";
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  handleRegistrySubmit(event) {
    const { email, password, rePassword, firstName, lastName } = this.state.registry;
   if (password !== rePassword) {
     //show error messaged
     return
   }
    
    axios
      .post(
        "http://localhost:8080/api/user/create",
        { 
          email: email,
          password: password,
          role: {
            id: 1
          },
          info: {
            firstName: firstName,
            lastName: lastName
          }
      
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
        const registry = response.date;
        this.setState({registry})
        console.log(registry);
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
                  <h2>????ng Nh???p</h2>
                  <p>
                    Ch??o M???ng ?????n v???i trang Web ?????t ph??ng gi???i tr?? Crazy House
                  </p>
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
                  <h3>????ng Nh???p</h3>
                  <form onSubmit={this.handleSubmit}>
                 
                    <div className="input__item">
                      <input
                        type="email"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                      <span className="icon_mail"></span>
                    </div>
                    <div className="input__item">
                      <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePass}
                      />
                      <span className="icon_lock"></span>
                    </div>
                    <button
                      type="submit"
                      className="site-btn"
                    >
                      ????ng Nh???p Ngay
                    </button>
                  </form>
                  <a href="#" className="forget_pass">
                    Qu??n M???t Kh???u?
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login__form">
                  <h3>B???n Ch??a C?? T??i Kho???n?</h3>
                  <form onSubmit={this.handleRegistrySubmit}>
                    <div className="input__item">
                    
                      <input
                        type="first name"
                        placeholder="Fist Name"
                        value = {this.state.registry.firstName}
                        onChange={(event) => this.setState({registry: {...this.state.registry , firstName: event.target.value} })}
                       required/>
                    </div>
                  <div className="input__item">
                      <input
                        type="lastname"
                        placeholder="Last Name"
                        value = {this.state.registry.lastName}
                        onChange={(event) => this.setState({registry: {...this.state.registry , lastName: event.target.value} })}
                       required/>
                    </div>
                     <div className="input__item">
                      <input
                        type="email"
                        placeholder="Email "
                        value = {this.state.registry.email}
                        onChange={(event) => this.setState({registry: {...this.state.registry , email: event.target.value} })}
                       required/>
                    </div>
                    <div className="input__item">
                      <input
                        type="password"
                        placeholder="M???t Kh???u"
                        value = {this.state.registry.password}
                        onChange={(event) => this.setState({registry: {...this.state.registry , password: event.target.value} })}
                      />
                    </div>
                    <div className="input__item">
                    <input
                        type="password"
                        placeholder="Nh???p l???i M???t Kh???u"
                        value = {this.state.registry.rePassword}
                        onChange={(event) => this.setState({registry: {...this.state.registry , rePassword: event.target.value} })}
                      />
                      <span className="icon_lock"></span>
                    </div>
                    <button
                      type="submit"
                      className="site-btn"
                    
                    >
                      ????ng K??
                    </button>
                  </form>
                  {/* <a href="#" className="primary-btn">
                    ????ng K?? !!!
                  </a> */}
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
