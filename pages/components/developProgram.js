import { faEdit } from "@fortawesome/free-solid-svg-icons";
import HeaderSection from "./headerSection";

const DevelopProgram = () => {
  const pillarsArr = [
    {
      title: "Understand the Unique Self",
      desc: "Students need to develop an understanding of the unique identity that makes each of them inherently special.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/Unique_Identity.png",
      backgroundColor: "#ff9c02",
    },
    {
      title: "Articulate Core Values",
      desc: "Our core values are unique and the heart of our motivations, and they will guide students in the next steps of their journeys.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/Core-Values.png",
      backgroundColor: "#ff7355",
    },
    {
      title: "Explore Personal Interests and Curiosities",
      desc: "Students need to explore their interests and curiosities in order to discover their passion and path for the future.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/Curiosity.png",
      backgroundColor: "#74bc19",
    },
    {
      title: "Set Goals Evaluate Decisions",
      desc: "Students use their own personal interests and values to start to envision their brightest future, encouraging them to set goals and make purpose-driven choices to achieve those goals.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/Purpose-driven-choices.png",
      backgroundColor: "#7f5aff",
    },
    {
      title: "Confront Doubts and Fears",
      desc: "Developing an awareness of negative beliefs that can hold students back in life helps them make informed decisions about issues they may need to work through to achieve success.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/Doubts_and_fears.png",
      backgroundColor: "#d63ef1",
    },
    {
      title: "Build Self-Confidence",
      desc: "Students can cultivate belief in themselves as capable individuals with valuable strengths that are deserving of success.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/Building_Self-confidence-Converted.png",
      backgroundColor: "#2b76df",
    },

    {
      title: "Develop Social Skills and Community Awareness",
      desc: "Students develop the understanding that their actions impact others and they have important contributions to make to society.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/Social_Skills.png",
      backgroundColor: "#ff9c02",
    },
    {
      title: "Manage Emotions",
      desc: "Recognizing different emotions and use self-care strategies to manage them.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/Living_With_Passion.png",
      backgroundColor: "#ff7355",
    },
    {
      title: "Cultivate An Entrepreneurial Spirit",
      desc: "Having the drive to tackle challenges with enthusiasm, creativity, and a can-do attitude will give students the ability to take charge of their lives.",
      icon: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/Entrepreneurial_Spirit.png",
      backgroundColor: "#74bc19",
    },
  ];
  return (
    <div className="mt-5">
      <HeaderSection
        icon={faEdit}
        title="KEY PILLARS"
        desc="AN EMPOWERING PROGRAM TO DEVELOP COURAGEOUS & SUCCESSFUL YOUTH"
      />
      <div className="row pillar-p-main">
        {pillarsArr.map((p, i) => (
          <div
            className="col-sm-12 col-md-4 text-center raised-block"
            style={{
              backgroundColor: p.backgroundColor,
            }}
            key={i}
          >
            <div>
              <img src={p.icon} alt="icon" width={120} height={120} />
              <h4 className="mt-4">{p.title}</h4>
              <p className="mt-2" style={{ fontSize: "1.2rem" }}>
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopProgram;
