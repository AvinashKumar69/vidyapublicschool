import React, { useContext } from "react";
import FooterBG1 from "../assets/images/footer_bg.svg";
import { AuthenticationContext } from "../auth/Authenticationservices";

const Footer = () => {
  const { matchesMobUi, matchesMobUiTest } = useContext(AuthenticationContext);
  return (
    <div
      style={{
        backgroundImage: !matchesMobUi && `url(${FooterBG1})`,
        backgroundColor: "#110b1a",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        height: matchesMobUi ? "250px" : "200px",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#fafafa",
        padding: "0 20px 0 20px",
      }}
    >
      <div>
        <h1 style={{ fontSize: matchesMobUi && "20px" }}>
          Vidya Public School
        </h1>
        <p style={{ fontSize: matchesMobUi && "16px" }}>
          All Rights Reserved &#169;2023
        </p>
      </div>
      <div>
        <h1 style={{ fontSize: matchesMobUi && "20px" }}>
          Get in touch with us:
        </h1>
        <p style={{ fontSize: matchesMobUi && "16px" }}>
          &#x260E; (+91) 8809821855
        </p>
        <p style={{ fontSize: matchesMobUi && "16px" }}>
          &#x1F4E7; ashwinikumaremail@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
