import Header from "./Header.jsx";
import "./Home.css";
import intro from '../assets/Openingvideo.mp4';

const Home = () => {
  const videoHeadStyle = {
    background: "linear-gradient(0deg, #000 4%, #606060 100%)",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative", // Ensure child elements respect position properties
  };

  const videoStyle = {
    width: "50%",
    height: "50%",
    position: "relative", // Corrected from `display: relative`
    top: "130px", // Now works correctly
  };

  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    width: "200px",
    height: "60px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    position:"relative",
  };

  return (
    <div className="home" style={{ backgroundColor: "black" }}>
      <div className="video_head" style={videoHeadStyle}>
        <Header />
        <video src={intro} autoPlay loop muted style={videoStyle} />
      </div>
      <button type="submit" style={buttonStyle}>REGISTER</button>
    </div>
  );
};

export default Home;
