import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import arrow from './arrow.svg';
import BasicModal from './BasicModal';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleModal = () => {
    setIsModalOpen(true);
    handleClose(); 
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button 
        style={{
          border: '1px solid #D54029',
          backgroundColor: '#D54029',
          height: '36px',
          width: '160px',
          borderRadius: '6px',
          fontWeight: "500", 
          textAlign: "center", 
          fontFamily: 'Poppins', 
          color: '#FFFFFF', 
          textTransform:'none',
          fontSize: '14px'}}
        aria-describedby={id} 
        variant="contained" 
        onClick={handleClick}
      >
        Add carrier
        <img style={{marginLeft:'15px' }} src={arrow} alt="arrow" />
      </Button>

      <Popover
        style={{width:'200px', height:'110px', borderRadius:'6px', display: 'flex', flexDirection: 'column'}}
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
          style={{
            justifyContent: 'flex-start',
            borderRadius: '0',
            width:'164px',
            backgroundColor: '#FFFFFF',
            fontWeight: "400", 
            textAlign: "left", 
            fontFamily: 'Poppins', 
            color: '#000000',
            textTransform:'none',
            fontSize: '14px'}}
          aria-describedby={id} 
          variant="contained" 
          onClick={toggleModal}
        >
          Global carrier
        </Button>

        <Button 
          style={{
            justifyContent: 'flex-start',
            borderRadius: '0',
            backgroundColor: '#FFFFFF',
            width:'164px',
            fontWeight: "400", 
            textAlign: "left", 
            textTransform:'none',
            fontFamily: 'Poppins', 
            color: '#000000', 
            fontSize: '14px'}}
          aria-describedby={id} 
          variant="contained" 
          onClick={handleClick}
        >
          Custom carrier
        </Button>
      </Popover>

      <BasicModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
