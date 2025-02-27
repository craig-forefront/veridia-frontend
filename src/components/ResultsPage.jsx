import React, { useState, useEffect, useRef } from 'react';
import image1 from '../assets/face1.jpeg';
import image2 from '../assets/face2.jpeg';
import image3 from '../assets/face3.jpeg';
import './ResultsPage.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Import Bootstrap React components

const ResultsPage = () => {
  const [searchResults, setSearchResults] = useState([
    {
      queryImage: image1,
      candidates: [
        { image: image2, name: 'John Doe', dob: '01/01/1990', matchScore: 0.95 },
        { image: image3, name: 'Jane Smith', dob: '05/10/1985', matchScore: 0.92 },
        { image: image2, name: 'Peter Jones', dob: '11/15/1992', matchScore: 0.88 },
        { image: image3, name: 'Alice Brown', dob: '03/20/1988', matchScore: 0.85 },
        { image: image2, name: 'Bob Williams', dob: '07/01/1995', matchScore: 0.82 },
        { image: image3, name: 'Eve Davis', dob: '09/22/1987', matchScore: 0.79 },
        { image: image2, name: 'John Doe', dob: '01/01/1990', matchScore: 0.95 },
        { image: image3, name: 'Jane Smith', dob: '05/10/1985', matchScore: 0.92 },
        { image: image2, name: 'Peter Jones', dob: '11/15/1992', matchScore: 0.88 },
        { image: image3, name: 'Alice Brown', dob: '03/20/1988', matchScore: 0.85 },
        { image: image2, name: 'Bob Williams', dob: '07/01/1995', matchScore: 0.82 },
        { image: image3, name: 'Eve Davis', dob: '09/22/1987', matchScore: 0.79 },
        { image: image2, name: 'John Doe', dob: '01/01/1990', matchScore: 0.95 },
        { image: image3, name: 'Jane Smith', dob: '05/10/1985', matchScore: 0.92 },
        { image: image2, name: 'Peter Jones', dob: '11/15/1992', matchScore: 0.88 },
        { image: image3, name: 'Alice Brown', dob: '03/20/1988', matchScore: 0.85 },
        { image: image2, name: 'Bob Williams', dob: '07/01/1995', matchScore: 0.82 },
        { image: image3, name: 'Eve Davis', dob: '09/22/1987', matchScore: 0.79 },
      ],
    },
    {
      queryImage: image1,
      candidates: [
        { image: image2, name: 'John Doe', dob: '01/01/1990', matchScore: 0.95 },
        { image: image3, name: 'Jane Smith', dob: '05/10/1985', matchScore: 0.92 },
        { image: image2, name: 'Peter Jones', dob: '11/15/1992', matchScore: 0.88 },
        { image: image3, name: 'Alice Brown', dob: '03/20/1988', matchScore: 0.85 },
        { image: image2, name: 'Bob Williams', dob: '07/01/1995', matchScore: 0.82 },
        { image: image3, name: 'Eve Davis', dob: '09/22/1987', matchScore: 0.79 },
        { image: image2, name: 'John Doe', dob: '01/01/1990', matchScore: 0.95 },
        { image: image3, name: 'Jane Smith', dob: '05/10/1985', matchScore: 0.92 },
        { image: image2, name: 'Peter Jones', dob: '11/15/1992', matchScore: 0.88 },
        { image: image3, name: 'Alice Brown', dob: '03/20/1988', matchScore: 0.85 },
        { image: image2, name: 'Bob Williams', dob: '07/01/1995', matchScore: 0.82 },
        { image: image3, name: 'Eve Davis', dob: '09/22/1987', matchScore: 0.79 },
        { image: image2, name: 'John Doe', dob: '01/01/1990', matchScore: 0.95 },
        { image: image3, name: 'Jane Smith', dob: '05/10/1985', matchScore: 0.92 },
        { image: image2, name: 'Peter Jones', dob: '11/15/1992', matchScore: 0.88 },
        { image: image3, name: 'Alice Brown', dob: '03/20/1988', matchScore: 0.85 },
        { image: image2, name: 'Bob Williams', dob: '07/01/1995', matchScore: 0.82 },
        { image: image3, name: 'Eve Davis', dob: '09/22/1987', matchScore: 0.79 },
      ],
    },
    {
      queryImage: image1,
      candidates: [
        { image: image2, name: 'John Doe', dob: '01/01/1990', matchScore: 0.95 },
        { image: image3, name: 'Jane Smith', dob: '05/10/1985', matchScore: 0.92 },
        { image: image2, name: 'Peter Jones', dob: '11/15/1992', matchScore: 0.88 },
        { image: image3, name: 'Alice Brown', dob: '03/20/1988', matchScore: 0.85 },
        { image: image2, name: 'Bob Williams', dob: '07/01/1995', matchScore: 0.82 },
        { image: image3, name: 'Eve Davis', dob: '09/22/1987', matchScore: 0.79 },
        { image: image2, name: 'John Doe', dob: '01/01/1990', matchScore: 0.95 },
        { image: image3, name: 'Jane Smith', dob: '05/10/1985', matchScore: 0.92 },
        { image: image2, name: 'Peter Jones', dob: '11/15/1992', matchScore: 0.88 },
        { image: image3, name: 'Alice Brown', dob: '03/20/1988', matchScore: 0.85 },
        { image: image2, name: 'Bob Williams', dob: '07/01/1995', matchScore: 0.82 },
        { image: image3, name: 'Eve Davis', dob: '09/22/1987', matchScore: 0.79 },
        { image: image2, name: 'John Doe', dob: '01/01/1990', matchScore: 0.95 },
        { image: image3, name: 'Jane Smith', dob: '05/10/1985', matchScore: 0.92 },
        { image: image2, name: 'Peter Jones', dob: '11/15/1992', matchScore: 0.88 },
        { image: image3, name: 'Alice Brown', dob: '03/20/1988', matchScore: 0.85 },
        { image: image2, name: 'Bob Williams', dob: '07/01/1995', matchScore: 0.82 },
        { image: image3, name: 'Eve Davis', dob: '09/22/1987', matchScore: 0.79 },
      ],
    },
  ]);

  const [candidatePages, setCandidatePages] = useState(
    searchResults.map(result => ({
      startIndex: 0,
      endIndex: Math.min(4, result.candidates.length - 1),
    }))
  );

  const candidateStripRefs = useRef(searchResults.map(() => React.createRef()));

  const handleNext = (index) => {
    setCandidatePages(prevPages => {
      const newStartIndex = Math.min(prevPages[index].startIndex + 5, searchResults[index].candidates.length);
      const newEndIndex = Math.min(newStartIndex + 4, searchResults[index].candidates.length - 1);
      if (newStartIndex <= searchResults[index].candidates.length && newStartIndex !== prevPages[index].startIndex) {
        const newPages = [...prevPages];
        newPages[index] = { startIndex: newStartIndex, endIndex: newEndIndex };
        return newPages;
      } else {
        return prevPages;
      }
    });
  };

  const handlePrevious = (index) => {
    setCandidatePages(prevPages => {
      const newStartIndex = Math.max(prevPages[index].startIndex - 5, 0);
      const newEndIndex = Math.min(newStartIndex + 4, searchResults[index].candidates.length - 1);

      if (newStartIndex >= 0 && newStartIndex !== prevPages[index].startIndex) {
        const newPages = [...prevPages];
        newPages[index] = { startIndex: newStartIndex, endIndex: newEndIndex };
        return newPages;
      } else {
        return prevPages;
      }
    });
  };

  useEffect(() => {
    candidateStripRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.scrollLeft = 0;
      }
    });
  }, [candidatePages]);

  return (
    <Container fluid className="p-0 m-0" style={{ marginLeft: '-12px', marginRight: '-12px' }}>
      {searchResults.map((result, index) => {
        const { startIndex, endIndex } = candidatePages[index];
        const displayedCandidates = result.candidates.slice(startIndex, endIndex + 1);

        return (
          <div key={index} className="result-item">
            <Row className="result-row w-100 gx-0">
              <Col xs={12} sm={4} md={3} className="query-image-col pl-0"> {/* Added pl-0 class */}
                <Card style={{ width: '12rem', height: '20rem' }}>
                  <div style={{ height: '12rem', overflow: 'hidden' }}>
                    <Card.Img
                      variant="top"
                      src={result.queryImage}
                      alt="Query"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                  <Card.Body>
                    <Card.Text>
                      {/* You can add query image description here if needed */}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={8} md={9} className="pr-0"> {/* Added pr-0 class */}
                <div className="candidate-strip" ref={candidateStripRefs.current[index]}>
                  <div className="candidate-container" style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: '15px',
                    overflowX: 'auto',
                    justifyContent: 'flex-start',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    width: '100%',
                    padding: '10px'
                  }}>
                    <style>
                      {`
                      .candidate-container::-webkit-scrollbar {
                        display: none;
                      }
                      `}
                    </style>
                    {displayedCandidates.map((candidate, candidateIndex) => (
                      <div key={candidateIndex} className="candidate" style={{ flex: '0 0 auto', marginRight: '15px' }}>
                        <Card style={{ width: '12rem', height: '20rem' }}>
                          <div style={{ height: '12rem', overflow: 'hidden' }}>
                            <Card.Img
                              variant="top"
                              src={candidate.image}
                              alt={candidate.name}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              loading="lazy"
                            />
                          </div>
                          <Card.Body>
                            <Card.Text className="candidate-text">
                              <div className="candidate-field">Name: {candidate.name}</div>
                              <div className="candidate-field">DOB: {candidate.dob}</div>
                              <div className="candidate-field">Match: {candidate.matchScore}</div>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="text-center">
                <Button
                  onClick={() => handlePrevious(index)}
                  disabled={startIndex === 0}
                  className="mr-2"
                  variant="outline-primary"
                >
                  &lt; Previous
                </Button>
                <Button
                  onClick={() => handleNext(index)}
                  disabled={endIndex >= result.candidates.length - 1}
                  variant="outline-primary"
                >
                  Next &gt;
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default ResultsPage;