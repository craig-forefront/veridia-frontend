import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link eventKey="link-1">Link 1</Nav.Link>
        <Nav.Link eventKey="link-2">Link 2</Nav.Link>
      </Nav>
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
    </div>
  );
};

export default Sidebar;