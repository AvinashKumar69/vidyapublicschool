import React, { useContext, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import HomeBG1 from "../assets/images/undraw_back_to_school_home_bg.svg";
import HomeBG2 from "../assets/images/undraw_personal_notebook_homeBg2.svg";
import HomeBG3 from "../assets/images/homeScreenPic.svg";
import { AuthenticationContext } from "../auth/Authenticationservices";
import CarouselHome from "../components/CarouselHome";

const Home = () => {
  const { matchesMobUi, matchesMobUiTest } = useContext(AuthenticationContext);
  const [show2ndTypedAnimation, setShow2ndTypedAnimation] = useState(false);

  return (
    <>
      <div
        className="scrollbarStyle"
        style={{
          // backgroundImage: `url(${HomeBG2})`,
          // backgroundImage: "linear-gradient(#281942, #331d58)",
          backgroundImage: "linear-gradient(#211536, #331d58)",
          backgroundColor: "#281942",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          height: "600px",
          overflowX: "hidden",
          display: "flex",
          flexDirection: matchesMobUi ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: matchesMobUi ? "90%" : "50%",
            color: "#002057",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              color: "#fafafa",
              fontSize: matchesMobUi ? "16px" : "2vw",
            }}
          >
            Welcome to
          </span>
          <TypeAnimation
            sequence={[
              "Vidya Public School",
              () => {
                setTimeout(() => {
                  setShow2ndTypedAnimation(true);
                }, 1000);
              },
            ]}
            wrapper="strong"
            cursor={false}
            repeat={0}
            style={{
              // color: "#0984ad",
              color: "#fafafa",
              fontSize: matchesMobUi ? "25px" : "3.4vw",
            }}
          />
          {show2ndTypedAnimation && (
            <TypeAnimation
              sequence={["Where We Shape The Future Of India", () => {}]}
              wrapper="span"
              cursor={false}
              repeat={0}
              style={{
                // color: "#0984ad",
                color: "#fafafa",
                fontSize: matchesMobUi ? "20px" : "2.08vw",
              }}
            />
          )}
        </div>
        <div>
          <img
            src={HomeBG3}
            alt="homeBG"
            style={{
              height: matchesMobUi ? "300px" : "30vw",
              width: matchesMobUi ? "300px" : "30vw",
            }}
          />
        </div>
      </div>
      <CarouselHome />
    </>
  );
};

export default Home;
