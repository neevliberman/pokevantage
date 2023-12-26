// Header component for the application
import React from 'react';
import Select from 'react-select';
import './PokeNav.css';

function PokeNav() {
    const options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three'},
        { value: 'four', label: 'Four' },
        { value: 'five', label: 'Five' },
        { value: 'six', label: 'Six' },
        { value: 'seven', label: 'Seven' },
        { value: 'eight', label: 'Eight' },
        { value: 'nine', label: 'Nine' },
        { value: 'ten', label: 'Ten' },
        {value: 'eleventy-seventy-five', label: 'Eleventy-seventy-five'}
      
    ];

    return (
        <Select 
            options={options}
            className="search-bar"
        />
    );
}

export default PokeNav;