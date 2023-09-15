import React from "react";
import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import stylesheet from "./Home.module.css";
import { BsPlayCircle } from "react-icons/bs";

const tourData = [
  {
    id: "t1",
    date: "JUL 16",
    location: "DETROIT, MI",
    title: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "t2",
    date: "JUL 19",
    location: "TORONTO, ON",
    title: "BUDWEISER STAGE",
  },
  {
    id: "t3",
    date: "JUL 22",
    location: "BRISTOW, VA",
    title: "JIFFY LUBE LIVE",
  },
  {
    id: "t4",
    date: "JUL 29",
    location: "PHOENIX, AZ",
    title: "AK-CHIN PAVILION",
  },
  {
    id: "t5",
    date: "AUG 2",
    location: "LAS VEGAS, NV",
    title: "T-MOBILE ARENA",
  },
  {
    id: "t6",
    date: "AUG 7",
    location: "CONCORD, CA",
    title: "CONCORD PAVILION",
  },
];

const tours = tourData.map((tour) => {
  return (
    <ListGroupItem stylesheet={{ border: "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100px" }}>{tour.date}</div>
        <div style={{ width: "200px" }}>{tour.location}</div>
        <div style={{ width: "400px" }}>{tour.title}</div>
        <Button
          className={stylesheet["list-group-btn"]}
          style={{
            marginLeft: "50px",
            color: "white",
          }}
        >
          BUY TICKETS
        </Button>
      </div>
      <hr />
    </ListGroupItem>
  );
});
const Home = () => {
  return (
    <>
      <div className={stylesheet["home-container"]}>
        The Generics
        <br />
        <BsPlayCircle />
      </div>
      <Container className={stylesheet["list-group"]}>
        <h2 style={{ textAlign: "center" }}>Tours</h2>
        <ListGroup
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {tours}
        </ListGroup>
      </Container>
    </>
  );
};

export default Home;
