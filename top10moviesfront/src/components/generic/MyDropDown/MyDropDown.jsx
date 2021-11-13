import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './MyDropDown.css'


const MyDropDown = ({title, items, updateFunction}) => {

    const [selectedValue, setSelectedValue] = useState(0)

    const handleSelect = (value) =>{
        updateFunction(parseInt(value));
        setSelectedValue(parseInt(value));
    };

    return(
        <div className="dropdown-menu-right"> 
            <DropdownButton align="end" title={title} menuVariant="dark" variant="outline-light" onSelect={(value)=>{handleSelect(value)}}>
                <Dropdown.Item active={selectedValue === 0} eventKey={0}>הכל</Dropdown.Item>
                <Dropdown.Divider />
                {
                    items.map(item=>{
                        return(
                            <Dropdown.Item key={Math.random()} active={item.id === selectedValue} eventKey={item.id}>{item.name}</Dropdown.Item>
                        );
                    })
                }
            </DropdownButton>
        </div>
    );
};
export default MyDropDown