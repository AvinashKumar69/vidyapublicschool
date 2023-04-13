import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import NavLogo1 from "../assets/images/navbar_logo1.jpg";
import { AuthenticationContext } from "../auth/Authenticationservices";

const NavbarAlt = () => {
  const { matchesMobUi, matchesMobUiTest } = useContext(AuthenticationContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px 10px 20px",
        backgroundColor: "#211536",
      }}
    >
      <Link to="/">
        <img
          src={NavLogo1}
          alt="logo"
          style={{
            height: matchesMobUi ? "40px" : "4.58vw",
            width: matchesMobUi ? "40px" : "4.58vw",
            objectFit: "contain",
            borderRadius: "300px",
            border: "1px solid blue",
          }}
        />
      </Link>

      {matchesMobUiTest && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            color: "#fafafa",
            gap: "20px",
          }}
        >
          <NavLink
            to="/"
            style={{
              color: "#fafafa",
              textDecoration: "none",
              fontSize: "1.3vw",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="#"
            style={{
              color: "#fafafa",
              textDecoration: "none",
              fontSize: "1.3vw",
            }}
          >
            Courses
          </NavLink>
          <NavLink
            to="#"
            style={{
              color: "#fafafa",
              textDecoration: "none",
              fontSize: "1.3vw",
            }}
          >
            About Us
          </NavLink>
          <NavLink
            to="#"
            style={{
              color: "#fafafa",
              textDecoration: "none",
              fontSize: "1.3vw",
            }}
          >
            Students
          </NavLink>
          <NavLink
            to="#"
            style={{
              color: "#fafafa",
              textDecoration: "none",
              fontSize: "1.3vw",
            }}
          >
            Gallery
          </NavLink>
        </div>
      )}
      {matchesMobUi && (
        <>
          {showMobileMenu ? (
            <CloseIcon
              style={{ color: "#fafafa", position: "relative" }}
              onClick={() => setShowMobileMenu(false)}
            />
          ) : (
            <MenuIcon
              style={{ color: "#fafafa", position: "relative" }}
              onClick={() => setShowMobileMenu(true)}
            />
          )}

          {showMobileMenu && (
            <div
              style={{
                position: "absolute",
                top: "50px",
                right: "20px",
                // height: "300px",
                // width: "300px",
                width: "60%",
                backgroundColor: "#fafafa",
                // color: "#211536",
                borderRadius: "10px",
                zIndex: 99,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  //   alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <NavLink
                  to="/"
                  style={{
                    color: "#211536",
                    textDecoration: "none",
                    fontSize: "20px",
                    padding: "5px",
                    fontWeight: "700",
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="#"
                  style={{
                    color: "#211536",
                    textDecoration: "none",
                    fontSize: "20px",
                    padding: "5px",
                    fontWeight: "700",
                  }}
                >
                  Courses
                </NavLink>
                <NavLink
                  to="#"
                  style={{
                    color: "#211536",
                    textDecoration: "none",
                    fontSize: "20px",
                    padding: "5px",
                    fontWeight: "700",
                  }}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="#"
                  style={{
                    color: "#211536",
                    textDecoration: "none",
                    fontSize: "20px",
                    padding: "5px",
                    fontWeight: "700",
                  }}
                >
                  Students
                </NavLink>
                <NavLink
                  to="#"
                  style={{
                    color: "#211536",
                    textDecoration: "none",
                    fontSize: "20px",
                    padding: "5px",
                    fontWeight: "700",
                  }}
                >
                  Gallery
                </NavLink>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NavbarAlt;
