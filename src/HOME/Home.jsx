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
    left:"45%",
  };
  const AboutTedStyle=
  {
color: "#FFF",
fontFamily: "Helvetica",
fontSize:"14px",
fontStyle:"normal",
fontWeight:"300",
lineHeight:"125.477%", 
width:"1191px",
height:"107px",
flexShrink: "0",
border:"1px solid red",
borderRadius:"18px",
backgroundColor:"black",
alignItems:"center",
  }
  const AboutHeadStyle={
    display:"flex",
    flexDirection:"column",
  }

  return (
    <div className="home" style={{ backgroundColor: "black" }}>
      <div className="video_head" style={videoHeadStyle}>
        <Header />
        <video style={videoStyle} autoPlay loop muted>
  <source src={intro} type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>
      <button type="submit" style={buttonStyle}>REGISTER</button>
      <div>
        <div style={AboutHeadStyle}>
          <h2 style={{color:"white"}}>About </h2>
          <h2 style={{color:"red"}}>TED</h2>
        </div>
        <div>
        <p style={AboutTedStyle}>
        TED(Technology, Entertainment, Design) is a non-profit media organization that posts international talks online for free distribution under the slogan "Ideas change everything". TED covers almost all topics – from science to business to global issues – in more than 100 languages. It hosts talks that shares unique ideas about almost everything under the sun, from business ventures to cooking techniques. A suite of short, carefully prepared talks, demonstrations and performances that are idea-focused, and cover a wide range of subjects to foster learning, inspiration and wo`nder – and provoke conversations that matter.  
        </p>
          </div>
               
      </div>
    </div>
  );
};

export default Home;
