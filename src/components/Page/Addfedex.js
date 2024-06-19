import React, { useState } from "react";
import Button from "@mui/material/Button";
import close from './close.svg';

const Addfedex = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [Reference, setReference] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Job, setJob] = useState("Manager");
  const [Company, setCompany] = useState("Company Name");
  const [Account, setAccount] = useState("");
  const [Description, setDescription] = useState("Enter a valid postal code");
  const [Street, setStreet] = useState("1234 Example St. Suite 123");
  const [City, setCity] = useState("San Francisco");
  const [State, setState] = useState("CA");
  const [Country, setCountry] = useState("US");
  const [Zip, setZip] = useState("94140");
  const [PhoneNumber, setPhoneNumber] = useState("123-123-1234");
  const [Email, setEmail] = useState("info@test.com");

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
            Add Your FedEx Account
          </p>

          
            <img onClick={handleClose} src={close} alt="close" style={{ marginLeft: '30px'}} />
         
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
            <p style={{ marginLeft: '10px',fontSize:'18px',fontWeight:'500px' }}>Zippyy additional Details</p>
            <p style={{ marginRight: '250px',fontSize:'18px',fontWeight:'500px'}}>Credentials Information</p>
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
              FedEx Account Holder Name*
              <input
                style={{ backgroundColor: "white" }}
                type="text"
                value={Account}
                onChange={(e) => setAccount(e.target.value)}
                required
              />
              <p
                style={{
                  color: "#B6B2BD",
                  fontSize: "10px",
                  fontWeight: "400px",
                }}
              >
                I have read the License Agreementopen_in_new.
              </p>
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
          </div>

          <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
            <p style={{ marginLeft: '10px',fontSize:'18px',fontWeight:'500px' }}>Company Information</p>
            <p style={{ marginRight: '280px',fontSize:'18px',fontWeight:'500px' }}>Address Information</p>
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
              First Name*
              <input
                style={{ backgroundColor: "white" }}
                type="FirstName"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
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
            </label>

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
              Last Name*
              <input
                style={{ backgroundColor: "white" }}
                type="LastName"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>

            <label
              style={{
                textAlign: "left",
                width: "50%",
                fontSize: "12px",
                fontWeight: "400px",
              }}
            >
              City*
              <input
                style={{ color: "#B6B2BD" }}
                type="City"
                value={City}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </label>

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
              Job Title*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="Job"
                  value={Job}
                  onChange={(e) => setJob(e.target.value)}
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
              State*
              <input
                style={{ color: "#B6B2BD" }}
                type="State"
                value={State}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </label>

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
              Company Name*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="Company"
                  value={Company}
                  onChange={(e) => setCompany(e.target.value)}
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
              Postal Code*
              <input
                style={{ color: "#B6B2BD" }}
                type="Zip"
                value={Zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </label>

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
              Phone Number*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="PhoneNumber"
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
              Country Code*
              <input
                style={{ color: "#B6B2BD" }}
                type="Country"
                value={Country}
                onChange={(e) => setCountry(e.target.value)}
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
                marginRight: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              Email*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="Email"
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
                marginRight: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              Street*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="Street"
                  value={Street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                />
              </div>
            </label>

            <label
              style={{
                textAlign: "left",
                width: "49%",
                marginRight: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              City*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="City"
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
                marginRight: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              State*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="State"
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
                marginRight: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              Postal Code*
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="Zip"
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
                marginRight: "475px",
                fontSize: "12px",
                fontWeight: "400px",
                padding: '10px 0'
              }}
            >
              Country Code
              <div style={{ display: "flex" }}>
                <input
                  style={{ color: "#B6B2BD" }}
                  type="Country"
                  value={Country}
                  onChange={(e) => setCountry(e.target.value)}
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
