import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import Combobox from "../components/Combobox";

export default class BookingRoom extends Component {
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
        this.setState({ products });
      });
  }
  handleBookingSubmit(){
    window.localStorage.removeItem('name');
    window.location.href = "http://localhost:3000/bookingroom";
  }

  render(){
    return (
      <div className = "container">
      
      <div class="breadcrumb-option">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb__links">
              <Link to="/">Trang Chủ</Link>
              <Link to="/">Booking Room</Link>
              <span>Booking Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className = "noidung">
      <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label >Khung Giờ</Label>
            <Input type="number"   placeholder="nhập giờ" min= '1'/>
          </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup style={{float : 'right'}}>
        <Label>Phòng</Label>
        <Input type="text" disabled  placeholder="Rooms" value={localStorage.getItem('name')}/>
      </FormGroup>
        </Col>
      </Row>
      <FormGroup style={{float : 'right'}}>
        <Label>Mã Giảm Giá</Label>
        <Input type="text"  placeholder="Mã giảm giá"/>
      </FormGroup>
      <FormGroup>
        <Label>Ghi Chú</Label>
        <Input type="textarea" rows="4" cols="10" style={{width:'350px'}}  placeholder="Ghi Chú"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Ngày Đặt Phòng</Label>
            <Input type="date" required/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Tổng thời gian thuê</Label>
            <Input type="date" />
          </FormGroup>
        </Col>
      </Row>
      <Button color="danger" className="btnsubmit" style = {{padding: '15px'}} onClick={this.handleBookingSubmit}>Booking Now</Button>
    </Form>
    <div style={{float : 'right'}} class="col-lg-4 col-md-6 col-sm-8">
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
                    <div class="filter__gallery">
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
                  <div class="product__sidebar__comment">
                    <div class="section-title">
                      <h5>New Comment</h5>
                    </div>
                    <div class="product__sidebar__comment__item">
                      <div class="product__sidebar__comment__item__pic">
                        <img src="assets/img/sidebar/comment-1.jpg" alt="" />
                      </div>
                      <div class="product__sidebar__comment__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5>
                          <a href="#">
                            The Seven Deadly Sins: Wrath of the Gods
                          </a>
                        </h5>
                        <span>
                          <i class="fa fa-eye"></i> 19.141 Viewes
                        </span>
                      </div>
                    </div>
                    <div class="product__sidebar__comment__item">
                      <div class="product__sidebar__comment__item__pic">
                        <img src="assets/img/sidebar/comment-2.jpg" alt="" />
                      </div>
                      <div class="product__sidebar__comment__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5>
                          <a href="#">Shirogane Tamashii hen Kouhan sen</a>
                        </h5>
                        <span>
                          <i class="fa fa-eye"></i> 19.141 Viewes
                        </span>
                      </div>
                    </div>
                    <div class="product__sidebar__comment__item">
                      <div class="product__sidebar__comment__item__pic">
                        <img src="assets/img/sidebar/comment-3.jpg" alt="" />
                      </div>
                      <div class="product__sidebar__comment__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5>
                          <a href="#">Kizumonogatari III: Reiket su-hen</a>
                        </h5>
                        <span>
                          <i class="fa fa-eye"></i> 19.141 Viewes
                        </span>
                      </div>
                    </div>
                    <div class="product__sidebar__comment__item">
                      <div class="product__sidebar__comment__item__pic">
                        <img src="assets/img/sidebar/comment-4.jpg" alt="" />
                      </div>
                      <div class="product__sidebar__comment__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5>
                          <a href="#">Monogatari Series: Second Season</a>
                        </h5>
                        <span>
                          <i class="fa fa-eye"></i> 19.141 Viewes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
      
      </div>
    );
  }
}