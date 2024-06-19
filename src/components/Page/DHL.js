import React, { useState } from "react";
import Button from "@mui/material/Button";
import close from './close.svg';
import Eye from './Eye.svg';

const Addfedex = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [Reference, setReference] = useState("");
    const [Account, setAccount] = useState("");
    const [Description, setDescription] = useState("Enter a valid postal code");
    const [CountryCode, setCountryCode] = useState("");
    const [Site, setSite] = useState("");
    const [State, setState] = useState("");
    const [isChecked, setIsChecked] = useState(false); 

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    const handleClose = () => setIsModalOpen(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        isModalOpen && (
            <div style={{ width: "978px", height: "600px", padding: "10px 0", overflow: 'scroll' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
                        Add Your DHL Express Account
                    </p>

                    <Button
                        style={{ backgroundColor: '#FFFFFF', border: 'none', width: '2px', marginRight: '15px' }}
                        onClick={handleClose}
                    >
                        <img src={close} alt="close" style={{ marginLeft: '40px' }} />
                    </Button>
                </div>

                <hr
                    style={{
                        marginLeft: "10px",
                        marginRight: "10px",
                        border: "1px solid #EAEBF1",
                    }}
                />

                <form onSubmit={handleSubmit} style={{ padding: '10px' }}>
                    <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between',marginRight:'250px'}}>
                        <p style={{ marginLeft: '10px',fontWeight: "500",
                            textAlign: "left",
                            color: "#121114",
                            fontSize: "18px",
                            lineHeight: "33px",
                            backgroundColor: "white",
                            margin: "10px", }}>Zippyy Details</p>
                        <p style={{fontWeight: "500",
                            textAlign: "left",
                            color: "#121114",
                            fontSize: "18px",
                            lineHeight: "33px",
                            backgroundColor: "white",
                            margin: "10px", }}>Production Credentials</p>
                    </div>
                    <div
                        className="form-group"
                        style={{ display: "flex", color: "#5F5A6B" }}
                    >
                        <label
                            style={{
                                textAlign: "left",
                                width: "50%",
                                marginRight: "10px",
                                fontSize: "12px",
                                fontWeight: "400px",
                            }}
                        >
                            Reference
                            <input
                                style={{ backgroundColor: "white" }}
                                type="text"
                                value={Reference}
                                onChange={(e) => setReference(e.target.value)}
                                required
                            />
                            <p
                                style={{
                                    color: "#B6B2BD",
                                    fontSize: "10px",
                                    fontWeight: "400px",
                                }}
                            >
                                Cannot be edited once set
                            </p>
                        </label>

                        <label
                            style={{
                                textAlign: "left",
                                width: "50%",
                                fontSize: "12px",
                                fontWeight: "400px",
                            }}
                        >
                            DHL Account Number*
                            <input
                                style={{ backgroundColor: "white" }}
                                type="text"
                                value={Account}
                                onChange={(e) => setAccount(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    <div
                        className="form-group"
                        style={{
                            display: "flex",
                            textAlign: "left",
                            color: "#5F5A6B",
                        }}
                    >
                        <label
                            style={{
                                textAlign: "left",
                                width: "50%",
                                marginRight: "10px",
                                fontSize: "12px",
                                fontWeight: "400px",
                            }}
                        >
                            Description
                            <div style={{ display: "flex" }}>
                                <input
                                    style={{ color: "#B6B2BD" }}
                                    type="tel"
                                    value={Description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>
                        </label>

                        <label
                            style={{
                                textAlign: "left",
                                width: "50%",
                                fontSize: "12px",
                                fontWeight: "400px",
                            }}
                        >
                            Account Country Code (2 Letter)
                            <input
                                style={{ color: "#B6B2BD" }}
                                type="text"
                                value={CountryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    <div
                        className="form-group"
                        style={{ display: "flex", flexDirection: 'column', color: "#5F5A6B", padding: '10px 0' }}
                    >
                        <label
                            style={{
                                textAlign: "left",
                                width: "49%",
                                marginLeft: "470px",
                                fontSize: "12px",
                                fontWeight: "400px",
                                padding: '10px 0'
                            }}
                        >
                            Site ID (Optional)
                            <div style={{ display: "flex" }}>
                                <input
                                    style={{ color: "#B6B2BD" }}
                                    type="text"
                                    value={Site}
                                    onChange={(e) => setSite(e.target.value)}
                                    required
                                />
                            </div>
                        </label>

                        <label
              style={{
                textAlign: "left",
                width: "49%",
                marginLeft: "470px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              Password (Optional)
              <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="text"
                  value={State}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
                <img src={Eye}
    alt="eye"
    style={{
      position: 'absolute',
      top: '50%',
      right: '10px', // Adjusted position to the right
      transform: 'translateY(-50%)',
      width: '20px',
      height: '18px',
      cursor: 'pointer'}} />
              </div>
              <p style={{color:'#B6B2BD',fontSize:'10px',fontWeight:'400px'}}>Concealed password length does not match actual password length
              </p>
              <div>
              <label style={{display:'flex',flexDirection:'row',justifyContent:'left',marginTop:'5px'}}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ width: '14px', height: '14px', backgroundColor: 'blue'}}
              />

              <p style={{fontSize: "10px",fontWeight:'400px',marginLeft:'5px'}}>Reseller Account? (check if yes)</p>
            </label>
              </div>
             
            </label>
                    </div>

                    <div
                        className="button-group"
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "15px",
                            textAlign: "center",
                            margin: "8px",
                        }}
                    >
                        <Button
                            type="button"
                            style={{
                                backgroundColor: "#D54029",
                                border: "1px solid #D54029",
                                textTransform: "none",
                                color: "#FFFFFF",
                                borderRadius: '6px',
                                height: "40px",
                                width: "164px",
                            }}
                            onClick={handleClose}
                        >
                            Deactivate
                        </Button>
                        <Button
                            type="submit"
                            style={{
                                backgroundColor: "#D54029",
                                border: "1px solid #D54029",
                                textTransform: "none",
                                color: "#FFFFFF",
                                borderRadius: '6px',
                                height: "40px",
                                width: "164px",
                            }}
                            disabled={!isChecked}
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        )
    );
};

export default Addfedex;
