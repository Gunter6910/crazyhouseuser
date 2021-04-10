import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Combobox = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  

  return (
      <div className = "comboboxEdit">
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle  style={{backgroundColor: '#fff'}}>
        <span style={{color:'black', fontFamily: 'Mulish'}}>Chọn Phòng <FontAwesomeIcon icon={faSortDown} /></span>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Phòng</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem divider />
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}
export default Combobox;