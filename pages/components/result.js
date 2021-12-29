import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Result = () => {
  return (
    <div className="row mb-5">
      <div className="col-sm-12 col-md-4 col-lg-4">
        <a href="https://empoweringconfidentyouth.com/school-community-educators/">
          <button className="community-btn">
            School and Community Educators
          </button>
        </a>
      </div>
      <div className="col-12 program-demonstrated">
        <div className="et_pb_text_inner">
          <h3>Students who completed our program demonstrated: </h3>
        </div>
        <div className="program-inner-text">
          <p>
            The overwhelming majority of students who took the post assessment
            demonstrated mastery of each of the assessment focus areas. In
            particular, students excelled at awareness of personal strengths,
            ability to articulate a personal belief system and core values,
            goal-setting, development of self-confidence, social skills, and
            identification of life passions.
          </p>
          <p>
            Assessment results are from the Regional High School (pilot school)
            in Holden, MA.
          </p>
          <div className="mt-5">
            <span style={{ fontSize: "3.5rem" }}>
              Assessment <strong>Results</strong>
            </span>
            <img
              src="https://empoweringconfidentyouth.com/wp-content/uploads/2021/05/ASSESSMENT-RESULTS-2.png"
              width="100%"
            />
          </div>
        </div>
        <div className="program-detail text-center mt-5">
          <p>
            “Social emotional learning (SEL) should be at the forefront during
            the COVID-19 pandemic. Students miss being able to see their friends
            and their teachers/staff. They miss the feeling of being connected
            to the community. Our goal this year as a counseling department was
            to implement a 9-week SEL program for our freshmen in hopes of
            connecting with them during their time of transition to the high
            school. We started piloting Empowering Confident Youth (ECY) in the
            fall of 2020 in a remote setting. Though the counseling department
            had to adjust the programming to better fit our needs, the bones of
            the program were developed by ECY. Based on the 128 freshmen who
            filled out the post-survey, 90.6% stated that they attended 6 or
            more SEL sessions. During the sessions, students became aware of
            their personal strengths, were able to articulate their core values,
            and developed self-confidence and social skills and were able to
            identify life passions. This was a time for freshmen to develop a
            relationship with their peers and with their counselors, in a time
            when human connection was even more important. Thank you to Jean
            Paul and the ECY team for allowing us to pilot this program!”
          </p>
        </div>
        <div className="pb_text mt-5">
          <h3>Lauren Clark, Director of School Counseling</h3>
        </div>
        <div className="text-center mt-5">
          <button
            type="button"
            className="request_btn pb-request-btn text-center"
            sty
          >
            <FontAwesomeIcon icon={faEdit} />
            <span style={{ marginLeft: 4 }}>Request Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
