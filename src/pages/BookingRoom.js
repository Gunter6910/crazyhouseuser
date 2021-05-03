import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

export default class BookingRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      combo: [],
      url:
        "http://localhost:8080/api/combo/combos/" +
        window.localStorage.getItem("idRoomBooking"),
      price: 0,
      comboName: "",
      bookingRoom: {
      roomid: "",
      comboid: "",
      bookingDate: "",
      hours: "",
      note: "",
      },
    };

    this.handleSubmitBooking = this.handleSubmitBooking.bind(this);
  }
  handleRoomId = (event) =>{
    this.setState({
      roomid: event.target.value
    })
  }
  handleComboId = (event) =>{
    this.setState({
      comboid: event.target.value
    })
  }
  handlebookingDate = (event) =>{
    this.setState({
      bookingDate: event.target.value
    })
  }
  handlehours = (event) =>{
    this.setState({
      hours: event.target.value
    })
  }
  handlenote = (event) =>{
    this.setState({
      note: event.target.value
    })
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/room/rooms/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        const products = res.data;
        this.setState({ products });
        console.log(products);
      });
    axios
      .get(this.state.url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        const combo = res.data;
        this.setState({ combo });
        this.setState({price: this.state.combo[0].price});
        window.localStorage.setItem('idcombo', this.state.combo[0].comboId )
        console.log(combo);
      });
  }

  handleChange = (e) => {
    this.setState({
      price: e.target.value
    });
  };

  handleBookingSubmit() {
    window.localStorage.removeItem("name");
    window.location.href = "http://localhost:3000";
  }
  handleClickSubmitBooking(){
    window.location.href = "http://localhost:3000/lichsu";
  }
  handleSubmitBooking(event) {
    const {
      bookingDate,
      hours,
      note,
    } = this.state.bookingRoom;
    axios
      .post(
        "http://localhost:8080/api/booking/new",
        {
          
          "booking":{
            note:note,
            "createdBy":{
              id:1
            },
            "customer":{
              id:parseInt(window.localStorage.getItem('id'))
            }
          },
          "room":{
            id:window.localStorage.getItem('idRoomBooking')
          },
          "combo":{
            "comboId": window.localStorage.getItem("idcombo")
          },
          "bookingDate":bookingDate,
          "hours": hours,
          "note":note
          
        },
        {
          headers: {
            accept: "*/*",
            "content-type": "application/json",
            Authorization: window.localStorage.getItem("accessToken"),
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        alert("Đặt Phòng Thành Công!!!")
      })
      .catch((error) => {
        alert("faillll")
      });
    event.preventDefault();
    // event.preventDefault();
    // fetch("http://localhost:8080/api/booking/new", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: this.state.id,
    //     item: this.state.item,
    //     itemType: this.state.itemType,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  }
  render() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    localStorage.setItem("idRoomBooking", params.id);
    return (
      <div className="container">
        <div class="breadcrumb-option">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="breadcrumb__links">
                  <Link to="/">Trang Chủ</Link>
                  <Link to="/">Đặt Phòng</Link>
                  <span>Chi Tiết Đặt Phòng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="noidung">
          <Form onSubmit={this.handleSubmitBooking}>
            <div className="form1" style={{ float: "left" }}>
              <FormGroup>
                <Label for="exampleEmail">Phòng</Label>
                <Input
                  type="Text"
                  name="room"
                  id="room1"
                  placeholder="Phòng..."
                  value={params.name}
                 
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Ngày Đặt</Label>
                <Input
                  type="Date"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                  onChange={(event) => this.setState({bookingRoom: {...this.state.bookingRoom, bookingDate: event.target.value}})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Ghi Chú</Label>
                <Input type="textarea" name="text" 
                  onChange={(event) => this.setState({bookingRoom: {...this.state.bookingRoom, note: event.target.value}})}
                />
              </FormGroup>
            </div>
            <div className="form2">
              <FormGroup>
                <Label for="exampleSelect">Combo</Label>

                <Input type="select" name="select" id="exampleSelect"  onChange={this.handleChange}
                 > 
                  {this.state.combo.map((combo) => (
                    <option value={combo.price} 
                    onclick={(event) => this.setState({bookingRoom: {...this.state.bookingRoom, note: event.target.value}})}
                    >
                      {combo.comboName}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="examplePassword">Tổng Giờ Thuê</Label>
                <Input
                  type="number"
                  name="hours"
                  min="0"
                  max="2"
                  placeholder="Tổng Giờ Thuê..."
                  onChange={(event) => this.setState({bookingRoom: {...this.state.bookingRoom, hours: event.target.value}})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Giá Phòng</Label>
                {/* {this.state.combo.map((combo) => ( */}
                <Input
                  type="number"
                  name="price"
                  placeholder="Giá Phòng"
                  // onChange={this.handleChange}

                  value={this.state.price}
                  disabled
                />
                {/* ))} */}
              </FormGroup>
              <Button
                color="danger"
                className="btnsubmit"
                style={{ padding: "15px" }}
                
                
              >
                Đặt Phòng
              </Button>
            </div>
          </Form>
          <div style={{ float: "right" }} class="col-lg-4 col-md-6 col-sm-8">
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
                        <Link style={{ color: "white" }}>{products.name}</Link>
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
              <div class="product__sidebar__comment">
                <div class="section-title">
                  <h5>Phòng Mới</h5>
                </div>
                {this.state.products.map((products) => (
                  <div class="product__sidebar__comment__item">
                    <div class="product__sidebar__comment__item__pic">
                      <img
                        src={"assets/img/hero/" + products.image}
                        alt=""
                        width="90px"
                        height="130px"
                      />
                    </div>
                    <div class="product__sidebar__comment__item__text">
                      <ul>
                        <li>Sale</li>
                        <li>Booking</li>
                      </ul>
                      <h5>
                        <Link style={{ color: "white" }}>{products.name}</Link>
                      </h5>
                      <span>
                        <i class="fa fa-eye"></i> 19.141 Viewes
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
