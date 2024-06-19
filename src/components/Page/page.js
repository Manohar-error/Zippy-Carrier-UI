import React, { useState } from 'react';
import './page.css';
import dhl from './dhl.svg';
import usps from './usps.svg';
import ups from './ups.svg';
import fedex from './fedex.svg';
import BasicPopover from './dots';
import BasicPopover2 from './dots2';
import Button from './Addcarrierbutton';
import AddDHLAccount from './DHL';
import Deactive from './deactive.svg';
import active from './active.svg';


function PersonalDetailsForm() {
  const [search, setFirstName] = useState('Search by carrier name, account id or description');
  const [activeView, setActiveView] = useState('zippyy');
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountStates, setAccountStates] = useState([false, false, false, false]);
  const [accountStates2, setAccountStates2] = useState([true, false, false, false]);


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const carriers = [{
    name: "USPS Digital Access Program Account",
    image: usps
  },
  {
    name: "FedEx Express",
    image: fedex
  },
  {
    name: "DHL  Express",
    image: dhl
  },
  {
    name: "UPS",
    image: ups
  },
  ]

  const openPopover = Boolean(popoverAnchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

  return (
    <div className="bordered">
      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
        <button type="submit" style={{
          border: "1px solid white",
          backgroundColor: 'white',
          height: '36px',
          marginRight: "10px", fontWeight: "500", textAlign: "center", fontFamily: 'Poppins', color: '#121114', fontSize: '14px', padding: '0 10px'
        }}>Marketplace</button>

        <button type="submit" style={{
          border: 'none',
          height: '36px',
          borderBottom: '1px solid #D54029',
          backgroundColor: 'white',
          marginRight: "10px", fontWeight: "500", textAlign: "center", fontFamily: 'Poppins', color: '#D54029', fontSize: '14px', padding: '0 10px'
        }}>Carriers</button>
      </div>

      <hr style={{ marginLeft: "10px", marginRight: "10px", border: '1px solid #EAEBF1' }}></hr>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input style={{ backgroundColor: 'white', color: '#B6B2BD' }}
            type="text" value={search} onChange={e => setFirstName(e.target.value)} />
        </div>
      </form>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#5F5A6B', padding: '10px' }}>
        <p style={{ textAlign: "left" }}>Start shipping right away with Zippyy’s discounted rates! Purchased postage will be billed to your Zippyy wallet. Connect your own carrier accounts to start shipping with your own negotiated rates.</p>
        <Button anchorEl={popoverAnchorEl} handleClose={handlePopoverClose} id={id} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
        <button
          type="button"
          onClick={() => handleViewChange('zippyy')}
          style={{
            border: 'none',
            height: '36px',
            borderBottom: activeView === 'zippyy' ? '1px solid #D54029' : 'none',
            backgroundColor: 'white',
            marginRight: "10px",
            fontWeight: "500",
            textAlign: "left",
            fontFamily: 'Poppins',
            color: activeView === 'zippyy' ? '#D54029' : '#121114',
            fontSize: '14px',
            padding: '0 10px'
          }}
        >
          Zippyy carrier accounts
        </button>

        <button
          type="button"
          onClick={() => handleViewChange('my')}
          style={{
            border: 'none',
            height: '36px',
            borderBottom: activeView === 'my' ? '1px solid #D54029' : 'none',
            backgroundColor: 'white',
            marginRight: "10px",
            fontWeight: "500",
            textAlign: "left",
            fontFamily: 'Poppins',
            color: activeView === 'my' ? '#D54029' : '#121114',
            fontSize: '14px',
            padding: '0 10px'
          }}
        >
          My carrier accounts
        </button>
      </div>



      <hr style={{ marginLeft: "10px", marginRight: "10px", border: '1px solid #EAEBF1' }}></hr>

      {activeView === "zippyy" && (
        <div className="border2">
          {carriers.map((item,index) => (

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '5px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
                <img style={{ width: '50px', height: '50px' }} src={item.image} alt="usps" />
                <p style={{ textAlign: 'left', fontWeight: "500", fontSize: '16px', marginTop: '10px', marginLeft: '10px' }}>{item.name}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
                <img src={accountStates[index] ? active : Deactive} alt={accountStates[index] ? 'active' : 'deactive'} style={{ width: '92px', height: '24px',marginTop:'10px'}} /><BasicPopover label='sucessfull' accountStates={accountStates}
                    setAccountStates={setAccountStates}
                    index={index}
                    accountStates2={accountStates2}
                    setAccountStates2={setAccountStates2} />
              </div>

            </div>

          ))
          }



        </div>
      )}

      {activeView === "my" && (
        <div className="border2">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '5px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
              <img style={{ width: '50px', height: '50px' }} src={usps} alt="usps" />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                <p style={{ textAlign: 'left', fontWeight: "500", fontSize: '16px' }}>USPS Digital Access Program Account</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ textAlign: "left", fontWeight: "500", fontSize: '10px', color: '#B6B2BD' }}>Account ID:</p>
                  <p style={{ textAlign: "left", fontWeight: "500", fontSize: '10px', color: '#7F7B89' }}>&nbsp;ca_3e0165828a7346129baf1ebca05e0436</p>
                </div>
              </div>
            </div>
            <BasicPopover2 label='USPS' anchorEl={popoverAnchorEl} handleClose={handlePopoverClose} id={id} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '5px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
              <img style={{ width: '50px', height: '50px' }} src={fedex} alt="fedex" />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                <p style={{ textAlign: 'left', fontWeight: "500", fontSize: '16px' }}>FedEx Express</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ textAlign: "left", fontWeight: "500", fontSize: '10px', color: '#B6B2BD' }}>Account ID:</p>
                  <p style={{ textAlign: "left", fontWeight: "500", fontSize: '10px', color: '#7F7B89' }}>&nbsp;ca_3e0165828a7346129baf1ebca05e0436</p>
                </div>
              </div>
            </div>
            <BasicPopover2 label='FEDEX' anchorEl={popoverAnchorEl} handleClose={handlePopoverClose} id={id} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '5px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
              <img style={{ width: '50px', height: '50px' }} src={dhl} alt="dhl" />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                <p style={{ textAlign: 'left', fontWeight: "500", fontSize: '16px' }}>DHL Express</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ textAlign: "left", fontWeight: "500", fontSize: '10px', color: '#B6B2BD' }}>Account ID:</p>
                  <p style={{ textAlign: "left", fontWeight: "500", fontSize: '10px', color: '#7F7B89' }}>&nbsp;ca_3e0165828a7346129baf1ebca05e0436</p>
                </div>
              </div>
            </div>
            <BasicPopover2 label='DHL' anchorEl={popoverAnchorEl} handleClose={handlePopoverClose} id={id} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '5px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
              <img style={{ width: '50px', height: '50px' }} src={ups} alt="ups" />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                <p style={{ textAlign: 'left', fontWeight: "500", fontSize: '16px' }}>UPS</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ textAlign: "left", fontWeight: "500", fontSize: '10px', color: '#B6B2BD' }}>Account ID:</p>
                  <p style={{ textAlign: "left", fontWeight: "500", fontSize: '10px', color: '#7F7B89' }}>&nbsp;ca_3e0165828a7346129baf1ebca05e0436</p>
                </div>
              </div>
            </div>
            <BasicPopover2 label='UPS' anchorEl={popoverAnchorEl} handleClose={handlePopoverClose} id={id} />
          </div>
        </div>
      )}

      {isModalOpen && <AddDHLAccount closeModal={handleCloseModal} />}
    </div>
  );
}

export default PersonalDetailsForm;
