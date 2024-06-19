import React, { useState } from "react";
import Button from "@mui/material/Button";
import close from './close.svg';

const Addfedex = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [Reference, setReference] = useState("");
  const [Account, setAccount] = useState("");
  const [Description, setDescription] = useState("Enter a valid postal code");
  const [Street, setStreet] = useState("1234 Example St. Suite 123");
  const [City, setCity] = useState("San Francisco");
  const [State, setState] = useState("CA");
  const [Zip, setZip] = useState("94140");
  const [Phone, setPhone] = useState("123-123-1234");
  const [Email, setEmail] = useState("info@test.com");
  const [Shipper, setShipper] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClose = () => setIsModalOpen(false);

  return (
    isModalOpen && (
      <div style={{ width: "978px", height: "600px", padding: "10px 0", overflow:'scroll'}}>
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
            Add Your USPS Account
          </p>

          <Button
            style={{ backgroundColor: '#FFFFFF', border: 'none', width: '2px',marginRight:'15px'}}
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

        <form onSubmit={handleSubmit} style={{padding: '10px' }}>
          <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
            <p style={{ marginLeft: '10px' }}>Zippyy additional Details</p>
            <p style={{ marginRight: '240px' }}>Production Credentials</p>
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
                type="Reference"
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
              Account Holder Name*
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
              Street Address*
              <input
                style={{ color: "#B6B2BD" }}
                type="Street"
                value={Street}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
              <p style={{ color: "#B6B2BD" }}>
                Concealed password length does not match actual password length
              </p>
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
                marginLeft: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              City*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="ID"
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </label>

            <label
              style={{
                textAlign: "left",
                width: "49%",
                marginLeft: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              State*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="ID"
                  value={State}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
            </label>

            <label
              style={{
                textAlign: "left",
                width: "49%",
                marginLeft: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              Zip code*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="ID"
                  value={Zip}
                  onChange={(e) => setZip(e.target.value)}
                  required
                />
              </div>
            </label>

            <label
              style={{
                textAlign: "left",
                width: "49%",
                marginLeft: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              Phone number*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="ID"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </label>

            <label
              style={{
                textAlign: "left",
                width: "49%",
                marginLeft: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              Email address*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="ID"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </label>

            <label
              style={{
                textAlign: "left",
                width: "49%",
                marginLeft: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              Shipper Identifier (Optional)
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="ID"
                  value={Shipper}
                  onChange={(e) => setShipper(e.target.value)}
                />
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
                borderRadius:'6px',
                height: "40px",
                width: "164px",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              style={{
                backgroundColor: "#D54029",
                border: "1px solid #D54029",
                textTransform: "none",
                color: "#FFFFFF",
                borderRadius:'6px',
                height: "40px",
                width: "164px",
              }}
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    )
  );
};

export default Addfedex;
