import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import HeaderSection from "./headerSection";

const Participants = () => {
  return (
    <div className="mt-3">
      <HeaderSection
        icon={faUser}
        title="TESTIMONIALS"
        desc="WHAT PARTICIPANTS HAVE TO SAY"
      />
      <div className="row">
        <div className="col-sm-12 col-md-7 review mt-5">
          <div className="d-flex">
            {[...Array(5)].map((e, i) => (
              <FontAwesomeIcon
                icon={faStar}
                size="lg"
                key={i}
                style={{ color: "#ffd700", marginRight: 4 }}
              />
            ))}
          </div>
          <h2 className="review-heading-border ">
            Regional High School (pilot school), Holden, MA
          </h2>
          <p className="h4 mt-4" style={{ fontWeight: "normal" }}>
            I HAVE DEFINITELY GOTTEN BETTER WITH MYSOCIAL SKILLS. I THINK
            EVERYONE GOES THROUGH AN AWKWARD PHASE AT SOME POINT IN THEIR LIFE.
            I AM ALWAYS OPEN TO MEETING NEW PEOPLE AND TALKING TONEW PEOPLE.
          </p>
          <p
            className="pillar-text mt-3"
            style={{ color: "#edf000", fontSize: 22 }}
          >
            9th Grader
          </p>
        </div>
      </div>
    </div>
  );
};

export default Participants;
