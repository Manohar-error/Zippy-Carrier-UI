import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import dots from './dots.svg';
import SUCCESS from './sucess';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from "@mui/material";
import sucess from './sucess.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  border: 'none',
  borderRadius: '8px',
  p: 2,
};

export default function BasicPopover({ label, accountStates, setAccountStates, index, accountStates2, setAccountStates2 }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUPSMOpen, setIsUPSMOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenUPSModal = () => {
    // Toggle the account state
    const newAccountState = !accountStates[index];

    const tempStates = [...accountStates];
    tempStates[index] = newAccountState;
    setAccountStates(tempStates);

    const tempStates2 = [...accountStates2];
    tempStates2[index] = newAccountState;
    setAccountStates2(tempStates2);

    setIsUPSMOpen(true);
    handleClose();
  };

  const handleCloseUPSModal = () => {
    setIsUPSMOpen(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <Button
          style={{ textTransform: 'none', color: '#5F5A6B', width: '200px', height: '52px', justifyContent: "left", fontWeight: "500", fontSize: "14px" }}
          onClick={handleOpenUPSModal}
        >
          <Typography style={{ fontWeight: '500', fontSize: '14px' }}>
            {accountStates[index] ? 'Deactivate account' : 'Activate account'}
          </Typography>
        </Button>
      </Popover>

      <Modal open={isUPSMOpen} onClose={handleCloseUPSModal}>
        <Box sx={style}>
          {!accountStates[index] ? (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img style={{ cursor: 'pointer', width: '50px', height: '50px' }} src={sucess} alt="sucess" />
              <Typography style={{ marginLeft: '12px', fontSize: '20px', fontWeight: "500" }}>Account has been deactivated successfully.</Typography>
            </div>
          ) : (
            label === 'sucessfull' ? (
              <SUCCESS onClose={handleCloseUPSModal} />
            ) : (
              null)
          )}
        </Box>
      </Modal>
    </div>
  );
}
