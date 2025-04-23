import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Sorting from "../../Assets/Projects/Sorting.png";
import ticTacToeImg from "../../Assets/Projects/ticTacToeImg.png";
import randomPassImg from "../../Assets/Projects/randomPassImg.png";
import bgmiProjectImg from "../../Assets/Projects/bgmiProjectImg.png";
import parallaxImg from "../../Assets/Projects/parallaxImg.png";
import shoppingCartImg from "../../Assets/Projects/shoppingCartImg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bgmiProjectImg}
              isBlog={false}
              title="BGMI Tournaments "
              description="Developed a web application to streamline the process of organizing and participating in BGMI (Battlegrounds Mobile India) tournaments."
              ghLink="https://github.com/Anup050/bgmi-tournaments"
              demoLink="https://www.bgmitournaments.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingCartImg}
              isBlog={false}
              title="E-Commerce"
              description="Developed a versatile and responsive clothing eCommerce website that allows users to shop anytime and manage their cart by adding or deleting items seamlessly."
              ghLink="https://github.com/Anup050/E-commerce-WebApp"
              demoLink="https://Anup.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg}
              isBlog={false}
              title="RANDOM PASSWORD GENERATOR"
              description="Developed a customizable password generator allowing users to set constraints like uppercase, lowercase, numbers, symbols, and desired length, while also indicating the strength of the generated password."
              ghLink="https://github.com/Anup050/random-password-generator"
              demoLink=" https://Anup050.github.io/random-password-generator/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sorting}
              isBlog={false}
              title="Sorting-Algorithms-Visualizer"
              description="Created a web app using HTML, CSS, and JavaScript to visualize sorting algorithms like Bubble, Insertion, Selection, Merge, and Quick Sort, along with their time complexities and total run times."
              demoLink="https://vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallaxImg}
              isBlog={false}
              title="Parallax Effect"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/Anup050/parallax-effect"
              demoLink="https://parallax-effect/"
              //  <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTacToeImg}
              isBlog={false}
              title="TicTacTwist"
              description="TicTacTwist is a modern take on the classic Tic Tac Toe game, crafted with JavaScript and styled with Tailwind CSS for a sleek and responsive design. This game offers a delightful user experience with smooth animations, intuitive gameplay, and a minimalist interface. Whether you're playing against a friend or challenging the computer, TicTacTwist provides a fun and engaging way to enjoy this timeless game, all from the convenience of your web browser. Dive into a world where strategy meets style, and see if you can outsmart your opponent in this reimagined classic!"
              ghLink="https://github.com/Anup050/tictac"
              demoLink="https:///tictac/"      
              // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
