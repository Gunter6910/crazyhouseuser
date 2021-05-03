import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import axios from "axios";
export default class LichSuDat extends Component {
  state = {
    historydetail: [],
    id: window.localStorage.getItem("id"),
    url:
      "http://localhost:8080/api/booking/report/" +
      window.localStorage.getItem("id"),
  };
  componentDidMount() {
    axios
      .get(this.state.url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        const historydetail = res.data;
        console.log(this.state.id);
        this.setState({ historydetail });
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
                  <Link to="/">Lịch Sử Đặt</Link>
                  <span>Phòng Thực Tế Ảo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="product-page spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                
                  <Table dark>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Ngày Đặt Phòng</th>
                        <th>Phòng</th>
                        <th>Combo</th>
                        <th>Giá</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.historydetail.map((historydetail) => (
                      <tr>
                        <th scope="row">{historydetail.id}</th>
                        <td>{historydetail.bookingDate}</td>
                        <td>{historydetail.room.name}</td>
                        <td>{historydetail.combo.comboName}</td>
                        <td> {historydetail.combo.price}</td>
                      </tr>
                      ))}
                    </tbody>
                  </Table>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
