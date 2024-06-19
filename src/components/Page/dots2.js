import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import dots from './dots.svg';
import USPS from './USPS';
import Fedex from './fedex';
import UPS from './Ups';
import DHL from './DHL';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from "@mui/material";

export default function BasicPopover({ label }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUPSMOpen, setIsUPSMOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenUPSModal = () => {
    setIsUPSMOpen(true);
    handleClose(); // Close the popover when opening UPS modal
  };

  const handleCloseUPSModal = () => {
    setIsUPSMOpen(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Define the style for the Box component inside the Modal
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    border: 'none'
  };

  return (
    <div>
      <img style={{ marginTop: '15px', cursor: 'pointer' }} src={dots} alt="dots" onClick={handleClick} />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Button style={{ textTransform: 'none', color: '#5F5A6B', width: '200px',height:'52px', justifyContent: "left"}} onClick={handleOpenUPSModal}>
          <Typography style={{fontWeight:'500px',fontSize:'14px'}}>Edit Carrier</Typography>
        </Button>
      </Popover>

      <Modal open={isUPSMOpen} onClose={handleCloseUPSModal}>
        <Box sx={style}>
          {label === 'USPS' && <USPS onClose={handleCloseUPSModal} />}
          {label === 'FEDEX' && <Fedex onClose={handleCloseUPSModal} />}
          {label === 'UPS' && <UPS onClose={handleCloseUPSModal} />}
          {label === 'DHL' && <DHL onClose={handleCloseUPSModal} />}
        </Box>
      </Modal>
    </div>
  );
}
