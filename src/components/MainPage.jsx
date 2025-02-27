import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import './MainPage.css';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

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
    <Container fluid className="d-flex flex-column min-vh-100"> {/* Use Bootstrap Container */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@5/dist/darkly/bootstrap.min.css"/>
      {/* Top thin header */}
      <header className="bg-dark text-white py-1 fixed-top" style={{ fontSize: '0.75rem' }}>
        <Container fluid> {/* Use Bootstrap Container */}
          <p className="mb-0">Top Header</p>
        </Container>
      </header>

      {/* Top Navmenu */}
      <nav className="navbar navbar-dark bg-dark fixed-top" style={{ top: '20px' }}>
        <Container fluid> {/* Use Bootstrap Container */}
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
        </Container>
      </nav>

      {/* Main body with sidebar and content */}
      <Row className="flex-grow-1" style={{ marginTop: '70px' }}> {/* Use Bootstrap Row */}
        {/* Sidebar */}
        <Col xs={12} md={3} lg={2} className={`position-fixed ${isSidebarOpen ? '' : 'd-none'} sidebar-accordion`} style={{ top: '90px', bottom: '20px', left: '0', zIndex: 10 }}> {/* Use Bootstrap Col */}
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
                  <Link className="nav-link text-white" to="/results">Sub Item 2</Link>
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
        </Col>

        {/* Main Content Area */}
        <Col
          xs={12}
          md={9}
          lg={10}
          style={{
            marginLeft: isSidebarOpen ? '200px' : '0',
            transition: 'margin-left 0.3s',
          }}
        >
          <main
            className="flex-grow-1"
            style={{
              width: '100%',
              padding: '0px',
            }}
          >
            <Container fluid className="p-0">
              <Outlet />
            </Container>
          </main>
        </Col>
      </Row>

      {/* Bottom thin footer */}
      <footer className="bg-dark text-white py-1 fixed-bottom" style={{ fontSize: '0.75rem' }}>
        <Container fluid> {/* Use Bootstrap Container */}
          <small>Footer Content</small>
        </Container>
      </footer>
    </Container>
  );
};

export default MainPage;
