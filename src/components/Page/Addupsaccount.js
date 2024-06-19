import React, { useState } from "react";
import Button from '@mui/material/Button';
import close from './close.svg';

const UPS = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
    const [UPSAccount, setUPSAccount] = useState("12A34B");
    const [description, setDescription] = useState("Optional description");
    const [Reference, setReference] = useState("Primary account");
    
    const handleClose = () => setIsModalOpen(false);
  
    return (
      isModalOpen && (
      <div style={{width:'978px',height:'550px'}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
          <p 
            style={{
              fontWeight: "500",
              textAlign: "left",
              color: "#121114",
              fontSize: "22px",
              lineHeight: "33px",
              backgroundColor: "white",
              margin: "10px",
            }}
          >
            Add Your UPS Account
          </p>

          
            <img onClick={handleClose} src={close} alt="close" style={{ marginRight: '30px'}} />
         
        </div>
        
        <hr
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            border: "1px solid #EAEBF1",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "10px",
            justifyContent: "center",
            padding:'10px'
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                textAlign: "left",
                color: "#121114",
                fontSize: "16px",
                lineHeight: "33px",
                backgroundColor: "white",
                padding: "8px 0",
              }}
            >
              UPS Account Information
            </p>
            <label style={{ color: "#5F5A6B",fontSize:'12px',fontWeight:'400px'}}>UPS Account Number*</label>
            <input style={{width:'436px',height:'62px',border:'1px solid #D9D9D9',borderRadius:'6px',padding:'0 10px'}}
              type="text"
              value={UPSAccount}
              onChange={(e) => setUPSAccount(e.target.value)}
            />
            
            <p
              style={{
                fontWeight: "600",
                textAlign: "left",
                color: "#121114",
                fontSize: "16px",
                lineHeight: "33px",
                backgroundColor: "white",
                padding: "8px 0",
              }}
            >
              Additional Zippyy Settings
            </p>
  
            <div style={{display:'flex',flexDirection:'column'}}>
            <label style={{ color: "#5F5A6B",fontSize:'12px',fontWeight:'400px' }}>Reference (Optional)</label>
            <input style={{width:'436px',height:'62px',border:'1px solid #D9D9D9',borderRadius:'6px',padding:'0 10px'}}
              type="text"
              value={Reference}
              onChange={(e) => setReference(e.target.value)}
            />
            <p style={{ color: "#B6B2BD",fontSize:'10px',fontWeight:'400px' }}>Cannot be edited once set</p>
            </div>
            <label style={{ color: "#5F5A6B",fontSize:'12px',fontWeight:'400px',marginTop:'10px'}}>Description (Optional)</label>
            <input style={{width:'436px',height:'62px',border:'1px solid #D9D9D9',borderRadius:'6px',padding:'0 10px'}}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div
            className="button-group"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "15px",
              textAlign: "center",
              marginTop: "50px",
              marginRight: "30px"
            }}
          >
           <Button onClick={onClose}
              type="button"
              style={{
                backgroundColor: "#D54029",
                border: "1px solid #D54029",
                textTransform: "none",
                color: "#FFFFFF", 
                borderRadius:'6px',     
                height:'40px',
                width:'164px'
              }}
            >
              Cancel
            </Button>
            <Button 
              type="button"
              style={{
                backgroundColor: "#D54029",
                border: "1px solid #D54029",
                textTransform: "none",
                color: "#FFFFFF",
                borderRadius:'6px',
                height:'40px',
                width:'164px'
              }}
            >
              Create
            </Button>
          </div>
      </div>
    )
  );
  };

export default UPS;
