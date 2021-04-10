import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
class Product extends Component {
  constructor(props) {
    super(props);
  this.state = {
    products: [],
  };
  }
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
        console.log(products);
        this.setState({ products });
        
      });
  }
  handleBooking(){
    window.location.href = "http://localhost:3000/bookingroom"
  }
  render() {
    return (
      <div>
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="trending__product">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title">
                        <h4>Danh Sách Phòng</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="btn__all">
                        <Link className="primary-btn">
                          View All
                          <span className="arrow_right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* product */}
                  <div className="row">
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
                              {...localStorage.setItem('image', products.image)}/>
                            <div className="ep">Size Room: {products.size}</div>
                            <Button color="danger" className="btn_addtocart" onClick={this.handleBooking}>
                              Đặt Phòng
                            </Button>{" "}
                          </div>
                          <div className="product__item__text">
                            <ul>
                              <li>Hot Booking</li>
                              <li>Sale off 50%</li>
                            </ul>
                            <Link style={{ color: "white" }} {...localStorage.setItem('name', products.name)}>
                              {products.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="live__product">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title">
                        <h4>Live Action</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="btn__all">
                        <Link className="primary-btn">
                          View All
                          <span className="arrow_right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row">
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
                            <div className="ep">{products.size}</div>
                            <Button color="danger" className="btn_addtocart">
                              Đặt Phòng
                            </Button>{" "}
                          </div>
                          <div className="product__item__text">
                            <ul>
                              <li>Hot Booking</li>
                              <li>Sale</li>
                            </ul>
                            <h5>
                              <Link style={{ color: "white" }}>
                                {products.name}
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div class="product__pagination">
                  <Link href="#" class="current-page">
                    1
                  </Link>
                  <Link href="#">2</Link>
                  <Link href="#">3</Link>
                  <Link href="#">4</Link>
                  <Link href="#">5</Link>
                  <Link href="#">
                    <i class="fa fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="product__sidebar">
                  <div className="product__sidebar__view">
                    <div className="section-title">
                      <h5>Most booked room</h5>
                    </div>
                    <ul className="filter__controls">
                      <li className="active" data-filter="*">
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

        <div className="search-model">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-switch">
              <i className="icon_close"></i>
            </div>
            <form className="search-model-form">
              <input
                type="text"
                id="search-input"
                placeholder="Search here....."
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
