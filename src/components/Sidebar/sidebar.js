import React from 'react';
import home from './home.svg';
import order from './order.svg';
import batches from './batches.svg';
import pickups from './pickups.svg';
import billing from './billing.svg';
import godash from './godash.svg';

import './sidebar.css';
import SettingsDropdown from './SettingsDropdown';

const Sidebar = () => {

  const handleImageClick = (imageName) => {
    console.log(`Clicked on ${imageName}`);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <button className="sidebar-item" onClick={() => handleImageClick('home')}>
          <img src={home} alt="home" />
          <span>Home</span>
        </button>

        <button className="sidebar-item" onClick={() => handleImageClick('order')}>
          <img src={order} alt="order" />
          <span>Order management</span>
        </button>

        <button className="sidebar-item" onClick={() => handleImageClick('batches')}>
          <img src={batches} alt="batches" />
          <span>Batches</span>
        </button>

        <button className="sidebar-item" onClick={() => handleImageClick('pickups')}>
          <img src={pickups} alt="pickups" />
          <span>Pickups</span>
        </button>

        <button className="sidebar-item" onClick={() => handleImageClick('billing')}>
          <img src={billing} alt="billing" />
          <span>Billing</span>
        </button>

        <SettingsDropdown />

      </div>
      <img className="pic" src={godash} alt="godash" />
    </div>
  );
};

export default Sidebar;
