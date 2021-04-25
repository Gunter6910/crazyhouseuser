/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PageCount from '../../components/PageCount';
import { Button } from "reactstrap";
class BoxingRoom extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/room/rooms", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        const products = res.data;
        this.setState({ products });
      });
  }
  render() {
    return (
      <div>
        {/* <!-- Breadcrumb Begin --> */}
        <div class="breadcrumb-option">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="breadcrumb__links">
                  <Link to="/">Trang Chủ</Link>
                  <Link to="/">Booking Room</Link>
                  <span>Phòng Đấm Bốc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Breadcrumb End -->

    <!-- Product Section Begin --> */}
        <section class="product-page spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="product__page__content">
                  <div class="product__page__title">
                    <div class="row">
                      <div class="col-lg-8 col-md-8 col-sm-6">
                        <div class="section-title">
                          <h4>Phòng Đấm Bốc</h4>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="product__page__filter">
                          <p>Order by:</p>
                          <select>
                            <option value="">A-Z</option>
                            <option value="">1-10</option>
                            <option value="">10-50</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">

                     {this.state.products.map((products) => (
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg={"assets/img/hero/" + products.image}
                          >
                            <img
                              src={"assets/img/hero/" + products.image}
                              alt="no logo"
                              height="324px"
                              width="230px"
                            />
                            <div className="ep">Size Room: {products.size}</div>
                            <Button color="danger" className="btn_addtocart">
                              Đặt Phòng
                            </Button>{" "}
                          </div>
                          <div className="product__item__text">
                            <ul>
                              <li>Hot Booking</li>
                              <li>Sale off 50%</li>
                            </ul>
                            <Link style={{ color: "white" }}>
                              {products.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <PageCount/>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-8">
                <div class="product__sidebar">
                  <div class="product__sidebar__view">
                    <div class="section-title">
                      <h5>Most booked room</h5>
                    </div>
                    <ul class="filter__controls">
                      <li class="active" data-filter="*">
                        Day
                      </li>
                      <li data-filter=".week">Week</li>
                      <li data-filter=".month">Month</li>
                      <li data-filter=".years">Years</li>
                    </ul>
                    <div className="filter__gallery">
                      {this.state.products.map((products) => (
                        <div
                          className="product__sidebar__view__item set-bg mix day years"
                          data-setbg="img/sidebar/tv-1.jpg"
                        >
                          <img
                            src={"assets/img/hero/" + products.image}
                            alt=""
                            width="350px"
                            height="190px"
                          />
                          <div className="ep">{products.size}</div>
                          <h5>
                            <Link style={{ color: "white" }}>
                              {products.name}
                            </Link>
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="product__sidebar__comment">
                    <div className="section-title">
                      <h5>New Rooms</h5>
                    </div>
                    {this.state.products.map((products) => (
                      <div className="product__sidebar__comment__item">
                        <div className="product__sidebar__comment__item__pic">
                          <img
                            src={"assets/img/hero/" + products.image}
                            alt=""
                            width="90px"
                            height="130px"
                          />
                        </div>
                        <div className="product__sidebar__comment__item__text">
                          <ul>
                            <li>Sale</li>
                            <li>Booking</li>
                          </ul>
                          <h5>
                            <Link style={{ color: "white" }}>
                              {products.name}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default BoxingRoom;
