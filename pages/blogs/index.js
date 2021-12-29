import Navbar from "../components/navbar";
import BlogInfo from "./blog-info";
import Footer from "../components/footer";

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <div className="press-main">
        <BlogInfo />
      </div>
      <Footer />
    </div>
  );
}
