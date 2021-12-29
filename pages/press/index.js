import Navbar from "../components/navbar";
import PressInfo from "./pressInfo";
import Footer from "../components/footer";

export default function Press() {
  return (
    <div>
      <Navbar />
      <div className="press-main">
        <PressInfo />
      </div>
      <Footer />
    </div>
  );
}
