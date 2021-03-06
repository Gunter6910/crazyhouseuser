import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function DropdownHeader (props){
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const logout = () => {

    window.localStorage.clear();
  }
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} style ={{float: 'right', top:'-5px' }} >
      <DropdownToggle>
      <span>Hi, {window.localStorage.getItem('fullName')}</span>
      <FontAwesomeIcon icon={faSortDown} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem><Link to="/login" style={{color:'#212529'}}>Đăng Nhập</Link></DropdownItem>
        <DropdownItem onClick = {logout} ><Link to="/login" style={{color:'#212529'}}>Đăng xuất</Link></DropdownItem>
        <DropdownItem ><Link to="/changepass" style={{color:'#212529'}}>Thay Đổi Mật Khẩu</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem ><Link to="/lichsu" style={{color:'#212529'}}>Chi Tiết Đặt Phòng</Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownHeader;