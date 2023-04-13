import { Button } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

var items = [
  {
    name: "Math",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Science",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "English",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Class 1 to 10",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "School Trips",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function Item(props) {
  return (
    <div
      style={{
        backgroundColor: "#3d216c",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fafafa",
        padding: "0 80px 0 80px",
        // border: "2px solid red",
      }}
    >
      {/* <div style={{ border: "1px solid #211536", padding: "10px" }}> */}
      <p>{props.item.name}</p>
      <p>{props.item.description}</p>
      {/* </div> */}

      <Button className="CheckButton">Check it out!</Button>
    </div>
  );
}

const CarouselHome = (props) => {
  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible={true}
      animation="slide"
      //   IndicatorIcon={<Home />} // Previous Example
      //   indicatorIconButtonProps={{
      //     style: {
      //       padding: "10px", // 1
      //       color: "#fafafa", // 3
      //     },
      //   }}
      //   activeIndicatorIconButtonProps={{
      //     style: {
      //       backgroundColor: "red", // 2
      //     },
      //   }}
      //   indicatorContainerProps={{
      //     style: {
      //       marginTop: "30px", // 5
      //       textAlign: "center", // 4
      //     },
      //   }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselHome;
