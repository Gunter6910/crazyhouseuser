/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownHeader from "../components/DropdownHeader";
class Header extends Component {
  render() {
    return (
      <div>
        {/* <div id="preloder">
          <div class="loader"></div>
        </div> */}
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="header__logo">
                  <Link to="/">
                    <img src="assets/img/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="header__nav">
                  <nav className="header__menu mobile-menu">
                    <ul>
                      <li className="active">
                        <Link to="/">Trang Chủ</Link>
                      </li>
                      <li>
                        <Link to="/">Booking Room</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="/roombig">Phòng Đập Phá Lớn</Link>
                          </li>
                          <li>
                            <Link to="/roomsmall">Phòng Đập Phá Nhỏ</Link>
                          </li>
                          <li>
                            <Link to="/BoxingRoom">Phòng Đấm Bốc</Link>
                          </li>
                          <li>
                            <Link to="/DartRoom">Phòng Đập Phi Tiêu</Link>
                          </li>
                          <li>
                            <Link to="/GameRoom">Phòng Game Thực Tế Ảo</Link>
                          </li>
                          <li>
                            <a href="./blog.html">Dịch Vụ Tư Vấn</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/lienhe">Liên Hệ</Link>
                      </li>
                      <li>
                        <Link to="/bookingroom">Booking Detail</Link>
                      </li>
                      <li>
                        <a href="./blog.html">Giới Thiệu</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="header__right">
                  {/* <Link to="/find" class="search-switch">
                    <span class="icon_search"></span>
                  </Link> */}
                  {/* <Link to="/bookingroom" class="search-switch">
                    <FontAwesomeIcon icon={faHouseUser} />
                  </Link> */}
                  <DropdownHeader />
                </div>
              </div>
            </div>
            <div id="mobile-menu-wrap"></div>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
