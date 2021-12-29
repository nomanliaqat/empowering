import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/navbar";
import Members from "./members";
import Footer from "../components/footer";

export default function OurTeam() {
  return (
    <div>
      <div className="mt-24">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faEdit}
            size="3x"
            style={{ color: "#ff7355" }}
          />

          <div className="pillar-text pillar-heading mt-4">
            <h4 style={{ color: "#2b76df" }}>OUR TEAM</h4>
          </div>
          <div className="team-title">
            <h1>Our Purpose and Passion</h1>
          </div>
          <p className="t-content">
            We base our dedication to empowering young people on the shared
            wisdom we have acquired over the course
            <br /> of our own journeys to success.
          </p>
        </div>
      </div>
      <Members />
      <Navbar />
      <Footer />
    </div>
  );
}
