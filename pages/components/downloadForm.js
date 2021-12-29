import React from "react";

const DownloadForm = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-4 offset-md-4 offset-lg-4 download-form">
        <h4>THE FUTURE STARTS NOW</h4>
        <h2 className="mt-3 fw-bold">Download The Program Overview Today</h2>
        <div className="mt-5">
          <input
            id="firstname"
            className="input-field"
            type="text"
            placeholder="First Name"
            name="firstname"
          />
          <input
            id="email"
            className="input-field"
            type="email"
            placeholder="Email"
            name="email"
          />
          <button type="submit" className="input-field download-btn">
            {" "}
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadForm;
