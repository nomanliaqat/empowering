import HeaderSection from "../components/headerSection";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function Objective() {
  return (
    <div className="objective align-items-center justify-content-center">
      <HeaderSection
        title="OUR OBJECTIVE:"
        desc="TURNING DREAMS INTO ACTION"
        icon={faBook}
        iconColor="#0dbfe2"
        titleColor="#fff"
        textColor="#ff9c02"
      />
      <div className="text-center mt-3 text-white">
        <p style={{ fontSize: "1.3rem" }}>
          Empowering Confident Youth (ECY) programs are a series of eleven
          <br />
          one-hour workshops designed to be taught once a week.
        </p>
        <p style={{ color: "#0dbfe2", fontSize: "1.6rem", fontWeight: 700 }}>
          We currently offer three comprehensive leadership programs:
        </p>
        {/* <div className="et_pb_row">Noman</div> */}
      </div>
    </div>
  );
}
