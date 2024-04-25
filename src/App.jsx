import "./App.css";
import Banner from "./components/Banner";
import Banner1 from "./components/Banner1";
//import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import LifeAtLU from "./components/LifeAtLU";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Ratings from "./components/Ratings";
import JobAssistance from "./components/programsPages/JobAssistance";
// import Signup from "./components/pages/Signup";

function App() {
  return (
    <>
      <div className="bg-black gap-10 rounded-lg flex w-full flex-col ">
        <Navbar />
        {/* <Banner1 /> */}
        <Banner />
        <Programs />
        <Ratings />
        <JobAssistance />
        <JobAssistance />
        <JobAssistance />
        <JobAssistance />
        {/* <Certificates /> */}
        <LifeAtLU />
        {/* <Signup /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
