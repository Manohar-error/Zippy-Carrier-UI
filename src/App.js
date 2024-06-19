import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import Page from './components/Page/page';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{display: 'flex', flexDirection: 'row', flex: 1, lineHeight: '24.2px' }}>
      <Sidebar />
      <div style={{padding:'20px 20px'}}>
      <Page />
      </div>
      </div>

    </div>
  );
}

export default App;