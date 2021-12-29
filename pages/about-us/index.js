import Navbar from "../components/navbar";
import YoutubeVideo from "../components/video";
import HeaderSection from "../components/headerSection";
import Objective from "./objective";
import Vision from "./vision";
import Goals from "./goals";
import Participants from "../components/participants";
import DownloadForm from "../components/downloadForm";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
        <HeaderSection
          title="THE BEST INVESTMENT"
          desc="YOU WILL EVER MAKE IN
          A CHILD’S FUTURE"
          titleColor="#ff2e00"
        />
      </div>
      <YoutubeVideo />
      <Objective />
      <Vision />
      <Goals />
      <Participants />
      <DownloadForm />
      <Footer />
    </div>
  );
}
