import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Addupsaccount from './Addupsaccount';
import Addfedex from './Addfedex';
import USPS from './AddUSPS';
import AddDhl from './AddDhl';

import usps from './usps.svg';
import dhl from './dhl2.svg';
import Ups from './ups.svg';
import FedEx from './fedex.svg';
import search from './search.svg';
import close from './close.svg';


export default function BasicModal({ setIsModalOpen, isModalOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCarrierModalOpen, setIsCarrierModalOpen] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState(null);

  console.log(`selected carrier: ${selectedCarrier}`)

  const handleClose = () => setIsModalOpen(false);
  const handleCarrierModalClose = () => setIsCarrierModalOpen(false);
  const handleCarrierModalOpen = (carrier) => {
    setSelectedCarrier(carrier.toLowerCase());
    setIsCarrierModalOpen(true);
  };

  const style = {
    position: 'absolute',
    width: '500px',
    height: 'auto',
    bgcolor: '#FFFFFF',
    border: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 2,
    borderRadius: '4px'
  };

  const carrierModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background',
    border: 'none'
  };

  const carriers = [
    { src: usps, alt: "usps", name: "USPS" },
    { src: FedEx, alt: "fedex", name: "FedEx Express" },
    { src: dhl, alt: "dhl", name: "DHL" },
    { src: Ups, alt: "Ups", name: "UPS" },
  ];

  const filteredCarriers = carriers.filter(carrier =>
    carrier.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Modal open={isModalOpen} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 20px' }}>
                <p style={{ fontWeight: "500", textAlign: "left", color: '#121114', fontSize: '22px', lineHeight: '33px', margin: 0 }}>
                  Add Carrier Account
                </p>
                <Button style={{ backgroundColor: '#FFFFFF', border: 'none', width: '5px' }} onClick={handleClose}>
                  <img src={close} alt="close" style={{ marginLeft: '50px' }} />
                </Button>
              </div>
              <hr style={{ marginLeft: "10px", marginRight: "10px", border: '1px solid #EAEBF1' }} />
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', position: 'relative', width: '100%' }}>
                <img
                  src={search}
                  alt="Search icon"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '18px',
                    cursor: 'pointer',
                    marginLeft: '10px'
                  }}
                /><input
                  type="text"
                  placeholder="Search carrier by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #EAEBF1',
                    boxSizing: 'border-box',
                    paddingLeft: '30px',
                  }}
                />

              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', padding: '14px 0' }}>
              {filteredCarriers.map((carrier, index) => (
                <div key={index} style={{ textAlign: 'center', margin: '15px' }}>
                  <img
                    src={carrier.src}
                    alt={carrier.alt}
                    style={{ width: '90px', height: '42px', cursor: 'pointer' }}
                    onClick={() => handleCarrierModalOpen(carrier.name)}
                  />
                  <p style={{ fontWeight: "400", fontSize: '14px', color: '#5F5A6B', cursor: 'pointer' }}>{carrier.name}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: '8px', padding: '8px 20px', marginTop: '50px' }}>
              <Button style={{ backgroundColor: '#D54029', border: 'none', height: '40px', width: '164px', borderRadius: '6px', color: '#fff', marginLeft: '10px' }} onClick={handleClose}>Cancel</Button>
            </div>
          </Typography>
        </Box>
      </Modal>

      <Modal open={isCarrierModalOpen} onClose={handleCarrierModalClose}>
        <Box sx={{ ...carrierModalStyle, width: 'auto', height: 'auto' }}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            <div style={{ backgroundColor: '#FFFFFF', flexDirection: 'row' }}>
              {selectedCarrier === "usps" && <USPS />}
              {selectedCarrier === "fedex express" && <Addfedex />}
              {selectedCarrier === "dhl" && <AddDhl />}
              {selectedCarrier === "ups" && <Addupsaccount />}

            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
