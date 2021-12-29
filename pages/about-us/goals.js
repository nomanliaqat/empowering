import React from "react";

function Goals(props) {
  return (
    <div className="row mb-24">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="goal-img" />
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 offset-md-1 offset-lg-1 mt-120">
        <div className="mt-4 et_pb_text">
          <h5>OUR</h5>
        </div>
        <div
          className="pillar-text pillar-subheading text-start"
          style={{ color: "#000" }}
        >
          <h1 className="p-0">LONG-TERM GOALS</h1>
        </div>
        <div className="vision-content">
          <p style={{ fontSize: "1.2rem" }}>
            This SEL program was designed to fill a much-needed missing piece in
            our educational system. Our program will not only help young people
            develop a healthy individual identity, but it will also help them
            find their purpose in life. Many students leave high school still
            wondering what they should do with their lives. Through our unique
            approach, we hope to help them discover their talents early in life
            and gain confidence to create and achieve any goal they set their
            minds to.
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            We aim to turn the program into a complete course offered at middle
            schools, high schools, and colleges everywhere. The core principles
            of this program, combined with practical knowledge, effective
            strategies, and application, will help young people develop life
            skills, self-confidence, ambition, and passion for a life of hard
            work, purpose, and service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Goals;
