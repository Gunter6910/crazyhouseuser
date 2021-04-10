/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="page-up">
          <a href="#" id="scrollToTopButton">
            <span className="arrow_carrot-up"></span>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer__logo">
                <Link to="/">
                  <img src="assets/img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__nav">
                <ul>
                  <li className="active">
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li>
                    <a href="/liennhe">Liên hệ</a>
                  </li>
                  <li>
                    <a href="/gioithieu">Giới Thiệu</a>
                  </li>
                  <li>
                    <a href="/donate">Donate</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <p>
                Copyright All rights reserved | This template is made with NgocPD
                <i className="fa fa-heart" aria-hidden="true"> </i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
