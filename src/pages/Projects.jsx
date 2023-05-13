import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Leetcode Clone"
              description="This is a clone of leetcode built in react and flask, here users can come login and solve coding problems.This webapp include features like authentication, codeeditor, code compilation and much more "
              ghLink="https://github.com/KrishRathor/LeetCodeThree"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Instagram Clone"
              description="This platform features a interface built with Flask, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (comment) is also available."
              ghLink="https://github.com/KrishRathor/INSTA-CLONE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Investments and Expense Tracker"
              description="This webapp is an investment and expense tracker built in flask which helps user to manage their investment portfolio learn more about investment. This webapp also includes features like its own wallet which allows user to transfer money from one person to anoher"
              ghLink="https://github.com/KrishRathor/Project-2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="ML Based Book Recommender system"
              description="This is a webapp where user can select a book and then this webapp will recommend users similar books using ML algorithms like KNN."
              ghLink="https://github.com/KrishRathor/Book-Recommender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="WhatsApp Chat Analyzer"
              description="This is a data science project where you can analyze any whatsapp chat.It is built in streamlit, flask and python libraries like re(regular expressions) and pandas. This includes features like wordcloud, most common words, mothly and daily activties."
              ghLink="https://github.com/KrishRathor/WhatsappChatAnalyzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="A simple Google Docs Clone"
              description="This is google docs clone built in ."
              ghLink="https://github.com/KrishRathor/Google-Docs-Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects