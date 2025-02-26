import React, { useState, useEffect } from 'react';

const SearchPage = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length) {
      // Limit to the first 100 files
      const limitedFiles = Array.from(files).slice(0, 100);
      const filesArray = limitedFiles.map(file => ({
        file,
        preview: URL.createObjectURL(file),
        selected: true, // default to selected
      }));
      setImages(filesArray);
    }
  };

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
    // Example: Create FormData and append selected images
    // const formData = new FormData();
    // selectedImages.forEach((img, idx) => {
    //   formData.append(`image_${idx}`, img.file);
    // });
    // fetch('/api/search', { method: 'POST', body: formData })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    // Cleanup URL objects
    return () => {
      images.forEach(img => URL.revokeObjectURL(img.preview));
    };
  }, [images]);

  return (
    <div className="container mt-3">
      <h1>Search Page</h1>
      <input type="file" accept="image/*" multiple onChange={handleFileChange} />
      {images.length > 0 && (
        <div className="mt-3">
          <h4>Select images for search (max 100):</h4>
          <div className="row">
            {images.map((img, idx) => (
              <div key={idx} className="col-3 mb-3">
                {/* Make the whole container clickable */}
                <div
                  style={{
                    position: "relative",
                    width: "150px",
                    height: "150px",
                    border: img.selected ? "3px solid #007bff" : "1px solid #ccc",
                    overflow: "hidden",
                    cursor: "pointer" // Change cursor to pointer
                  }}
                  onClick={() => toggleSelect(idx)} // Toggle selection on container click
                >
                  <img
                    src={img.preview}
                    alt={`Preview ${idx}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {/* Show the checkbox */}
                  <input
                    type="checkbox"
                    checked={img.selected}
                    readOnly // Make it read-only
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
              </div>
            ))}
          </div>
          <button
            className="btn btn-primary"
            onClick={handleSearch}
            disabled={!images.some(img => img.selected)}
          >
            Submit for Search
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;