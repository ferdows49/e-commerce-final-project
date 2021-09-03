import "./Home.css";
import HeaderImage from "../../assets/images/header/image1.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const Home = () => {
  return (
    <div className="header">
      <div className="container">
        <NavBar />
        <div className="row">
          <div className="col-2">
            <h1>
              Give Your Outfit <br /> A New Style
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <StyledNavLink to="" className="btn">
              Explore Now &#8594;
            </StyledNavLink>
          </div>
          <div className="col-2">
            <img src={HeaderImage} alt="sports" />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
