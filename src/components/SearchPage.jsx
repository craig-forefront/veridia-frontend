import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

const SearchPage = () => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const limitedFiles = acceptedFiles.slice(0, 100);
    const filesArray = limitedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      selected: true,
    }));
    setImages(filesArray);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });

  const toggleSelect = (index) => {
    setImages(prevImages => {
      const newImages = prevImages.map((img, i) => {
        if (i === index) {
          return { ...img, selected: !img.selected };
        }
        return img;
      });
      return newImages;
    });
  };

  const handleSearch = () => {
    const selectedImages = images.filter(img => img.selected);
    console.log("Submitting images for search:", selectedImages);
  };

  useEffect(() => {
    return () => {
      images.forEach(img => URL.revokeObjectURL(img.preview));
    };
  }, [images]);

  return (
    <Container className="mt-3">
      <h1>Search Page</h1>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the images here ...</p>
        ) : (
          <p>Drag 'n' drop some images here, or click to select files</p>
        )}
      </div>
      {images.length > 0 && (
        <div className="mt-3">
          <h4>Select images for search (max 100):</h4>
          <Row>
            {images.map((img, idx) => (
              <Col key={idx} xs={6} md={4} lg={3} className="mb-3">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "150px",
                    border: img.selected ? "3px solid #007bff" : "1px solid #ccc",
                    overflow: "hidden",
                    cursor: "pointer"
                  }}
                  onClick={() => toggleSelect(idx)}
                >
                  <img
                    src={img.preview}
                    alt={`Preview ${idx}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <input
                    type="checkbox"
                    checked={img.selected}
                    readOnly
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <p className="text-center" style={{ fontSize: "0.8rem" }}>
                  {img.file.name}
                </p>
              </Col>
            ))}
          </Row>
          <Button
            variant="primary"
            onClick={handleSearch}
            disabled={!images.some(img => img.selected)}
          >
            Submit for Search
          </Button>
        </div>
      )}
    </Container>
  );
};

export default SearchPage;