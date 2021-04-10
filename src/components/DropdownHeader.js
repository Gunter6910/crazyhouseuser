import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function DropdownHeader (props){
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const logout = () => window.localStorage.clear();
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} style ={{float: 'right', top:'-5px' }} >
      <DropdownToggle>
      <span>Hi, {window.localStorage.getItem('fullName')}</span>
      <FontAwesomeIcon icon={faSortDown} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>User Option</DropdownItem>
        <DropdownItem><Link to="/login" style={{color:'#212529'}}>Login</Link></DropdownItem>
        <DropdownItem onClick = {logout}>Logout</DropdownItem>
        <DropdownItem divider />
        <DropdownItem ><Link to="/bookingroom" style={{color:'#212529'}}>Booking Room Details</Link></DropdownItem>
        <DropdownItem>About Us</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownHeader;