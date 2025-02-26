import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import './MainPage.css';

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState("0");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAccordionSelect = (eventKey) => {
    // Prevent closing the currently active item.
    if (eventKey === activeAccordion) return;
    setActiveAccordion(eventKey);
  };

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@5/dist/darkly/bootstrap.min.css"/>
      {/* Top thin header */}
      <header className="bg-dark text-white py-1 fixed-top" style={{ fontSize: '0.75rem' }}>
        <div className="container-fluid">
          <p className="mb-0">Top Header</p>
        </div>
      </header>

      {/* Top Navmenu */}
      <nav className="navbar navbar-dark bg-dark fixed-top" style={{ top: '20px' }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
            aria-controls="sidebar"
            aria-expanded={isSidebarOpen}
            aria-label="Toggle sidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#!">Navmenu</a>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#!">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">Link</a>
              </li>
              {/* Add more nav items as needed */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main body with sidebar and content */}
      <div className="flex-grow-1 d-flex" style={{ marginTop: '70px' }}>
        {/* Sidebar */}
        <aside
          className={`position-fixed ${isSidebarOpen ? '' : 'd-none'}`}
          style={{ width: '200px', top: '90px', bottom: '20px', left: '0' }}
        >
          <Accordion
            activeKey={activeAccordion}
            onSelect={handleAccordionSelect}
            defaultActiveKey="0"
            className="bg-dark text-white sidebar-accordion"
            flush
          >
            <Accordion.Item eventKey="0" className="bg-dark border-0">
              <Accordion.Header>
                Search
              </Accordion.Header>
              <Accordion.Body className="bg-dark">
                <nav className="nav flex-column">
                  {/* Use Link to route to the search page */}
                  <Link className="nav-link text-white" to="/search">Sub Item 1</Link>
                  <a className="nav-link text-white" href="#!">Sub Item 2</a>
                </nav>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="bg-dark border-0">
              <Accordion.Header>
                Menu Section 2
              </Accordion.Header>
              <Accordion.Body className="bg-dark">
                <nav className="nav flex-column">
                  <a className="nav-link text-white" href="#!">Sub Item A</a>
                  <a className="nav-link text-white" href="#!">Sub Item B</a>
                  <a className="nav-link text-white" href="#!">Sub Item C</a>
                </nav>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow-1" style={{ marginLeft: isSidebarOpen ? '200px' : '0' }}>
          <div className="container mt-3">
            {/* Render the routed component */}
            <Outlet />
          </div>
        </main>
      </div>

      {/* Bottom thin footer */}
      <footer className="bg-dark text-white py-1 fixed-bottom" style={{ fontSize: '0.75rem' }}>
        <div className="container-fluid">
          <small>Footer Content</small>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
