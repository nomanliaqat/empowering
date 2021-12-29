import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import HeaderSection from "../components/headerSection";

const PromisingOutcomes = () => {
  const outComesArr = [
    {
      title: "Regional High School",
      desc: "Ninth-graders from the Regional High School excelled at awareness of personal strengths, ability to articulate a personal belief system and core values, goal-setting, development of self-confidence, social skills, and identification of life passions.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/AR-190419103.jpg",
    },
    {
      title: "YMCA of Central Massachusetts",
      desc: "ECY’s curriculum allows for leadership training during a time that this is difficult and more needed than ever. The curriculum also took them from an isolated world and allowed them to build social connection and have real talk about challenges.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/r-h-white-construction-co-inc-ymca-of-central-massachusetts.png",
    },
  ];
  return (
    <div className="mt-3">
      <HeaderSection
        icon={faThumbsUp}
        title="PROMISING OUTCOMES"
        desc="PILOT OUTCOME RESULTS"
        textColor="#ff7355"
      />
      <div className="row pillar-p-main">
        {outComesArr.map((o, i) => (
          <div
            className="col-sm-12 col-md-6 text-center result-block"
            style={{
              backgroundColor: "#d73ef1",
              position: "relative",
            }}
            key={i}
          >
            <div>
              <img src={o.icon} alt="icon" width={"100%"} />
              <h4
                className="mt-5 pillar-text"
                style={{ fontSize: 24, fontWeight: "normal" }}
              >
                {o.title}
              </h4>
              <p className="mt-2" style={{ fontSize: "1.2rem" }}>
                {o.desc}
              </p>
              <div>
                <a
                  href="https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/ECY-Spring-2021-Pilot-Outcome-Results.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="read-more-btn">Read More &gt;&gt;</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromisingOutcomes;
