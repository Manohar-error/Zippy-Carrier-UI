import React, { useState, useEffect, useRef } from 'react';
import settings from './settings.svg';
import company from './company.svg';
import add from './add.svg';
import integration from './integration.svg'; 
import downArrow from "./downArrow.svg";
import './SettingsDropdown.css';

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleImageClick = (imageName) => {
    console.log(`Clicked on ${imageName}`);
  };

  return (
    <div ref={dropdownRef} className="settings-dropdown">
      <button className="sidebar-item" onClick={toggleDropdown}>
        <img src={settings} alt="settings" />
        Settings
        <img style={{marginLeft:'90px'}} src={downArrow} alt="down arrow" className="down-arrow" />{" "}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button className="sidebar-item" onClick={() => handleImageClick('company')}>
            <img src={company} alt="company" />
            <span>Company details</span>
          </button>
          <button className="sidebar-item" onClick={() => handleImageClick('add')}>
            <img src={add} alt="add" />
            <span>Addresses</span>
          </button>
          <button className="sidebar-item" onClick={() => handleImageClick('integration')}>
            <img src={integration} alt="integration" />
            <span>Integrations</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;
