import Head from "next/head";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import Result from "../components/result";
import YoutubeVideo from "../components/video";
import DevelopProgram from "../components/developProgram";
import PromisingOutcomes from "./promisingOutcomes";
import Participants from "../components/participants";
import DownloadForm from "../components/downloadForm";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Empowering Confident Youth | Social-Emotional Learning</title>
      </Head>
      <Navbar />
      <Slider />
      <YoutubeVideo />
      <Result />
      <DevelopProgram />
      <PromisingOutcomes />
      <Participants />
      <DownloadForm />
      <Footer />
    </div>
  );
}
