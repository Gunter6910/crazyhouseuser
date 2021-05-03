/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class EditPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: "",
        oldPassword: "",
        newPassword: "",
      },
    };
  }

  handleOldPass = (event) => {
    this.setState({ oldPassword: event.target.value });
  };
  handlenewPass = (event) => {
    this.setState({ newPassword: event.target.value });
  };
  handleSubmit = (event) => {
    const { oldPassword, newPassword } = this.state.data;

    axios
      .post(
        "http://localhost:8080/api/user/changepwd",
        {
          id: window.localStorage.getItem("id"),
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            method: "POST",
            accept: "*/*",
            "content-type": "application/json",
            Authorization: window.localStorage.getItem("accessToken"),
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        alert("change success!!!");
      })
      .catch((error) => {
        console.log("change error", error);
      });
    event.preventDefault();
  };

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
                  <h2>Thay Đổi Mật Khẩu</h2>
                  <p>
                    Chào Mừng đến với trang Web đặt phòng giải trí Crazy House
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
              <div className="col-lg-12">
                <div className="login__form">
                  <h3>Thay Đổi Mật Khẩu</h3>
                  <Form onSubmit={this.handleSubmit} method="post">
                    <div className="input__item">
                      <input
                        type="password"
                        placeholder="Nhập Mật Khẩu cũ"
                        onChange={(event) =>
                          this.setState({
                            data: {
                              ...this.state.data,
                              oldPassword: event.target.value,
                            },
                          })
                        }
                        required
                      />
                      <span className="icon_mail"></span>
                    </div>
                    <div className="input__item">
                      <input
                        type="password"
                        placeholder="Nhập Lại Mật Khẩu mới"
                        onChange={(event) =>
                          this.setState({
                            data: {
                              ...this.state.data,
                              newPassword: event.target.value,
                            },
                          })
                        }
                      />
                      <span className="icon_lock"></span>
                    </div>
                    <button type="submit" className="site-btn">
                      Lưu
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default EditPass;
