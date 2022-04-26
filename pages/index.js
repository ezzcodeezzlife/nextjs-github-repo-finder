import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import Script from "next/script";
import Link from "next/link";
import { GoMarkGithub, GoGlobe, GoBeaker } from "react-icons/go";
import {
  Card,
  Button,
  Navbar,
  Container,
  Spinner,
  Badge,
  Jumbotron,
  Form,
} from "react-bootstrap";
import Head from 'next/head'

const Home = ({ data }) => {
  const repos = data.items;
  

  const [search, setSearch] = useState("");

  const router = useRouter();

  const redirectToPage = (page) => {
    router.push(page);
  };





  return (
    <>

<Head>
        <title>Home - Appsplosion</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Appsplosion
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample01"
            aria-controls="navbarsExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample01">
            <ul class="navbar-nav me-auto mb-2">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All languages
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdown01">
                  <li>
                    <a class="dropdown-item" href="/python">
                      Python
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/java">
                      Java
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Javascript">
                      Javascript
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Rust">
                      Rust
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/go">
                      Go
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/C++">
                      C++
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Php">
                      Php
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: `URL('https://i.pinimg.com/originals/53/2e/a0/532ea090207b42fbd4c25e99fe3f0526.jpg')`,
          height: "600px",
        }}
      >
        <div class="mask">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <div class="jumbotron">
                <br></br>
                <br></br>
                <h1 class="display-4">Welcome to Appsplosion!</h1>
                <p class="lead">
                  We at Appsplosion care about quality education. Not every
                  school and university can teach in a way that is both fun and
                  engaging.<br></br> Fortunately here you can find hundreds of
                  Courses, Consultants and Products to help you learn about your
                  favorite topics in an unforgettable way!
                </p>
                <hr class="my-4"></hr>

                <p class="lead">
                  <a
                    class="btn btn-outline-primary btn-lg"
                    href="#content"
                    role="button"
                  >
                    See more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content"></div>
      
      
       
        <div class="container">
          <div class="row">
            {repos.map((repo) => (
              <div
                class="col-sm-6 col-md-4 col-lg-3"
                style={{ marginTop: "20px" }}
              >
                <Card>
                  <Card.Img variant="top" src={repo.owner.avatar_url} />
                  <Card.Body>
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Text>{repo.description}</Card.Text>
                    <Card.Text>{repo.stargazers_count} ⭐</Card.Text>

                    {repo.language ? (
                      <>
                        <a href={"/" + repo.language}>
                          <button
                            className="btn btn-outline-primary"
                            type="submit"
                          >
                            more {repo.language} projects
                          </button>
                        </a>
                        <br></br>
                        <br></br>
                      </>
                    ) : (
                      <></>
                    )}

                    <Link href={repo.html_url}>
                      <Button variant="primary">
                        <GoMarkGithub /> Github
                      </Button>
                    </Link>

                    <Link href={repo.homepage}>
                      <Button variant="secondary" style={{ marginLeft: "5px" }}>
                        <GoGlobe /> Website
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
     
      <>
        {/* Create responsice 2 x 2 grid */}
        <div class="container" style={{ marginTop: "20px" }}>
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://miro.medium.com/max/750/1*We_yPZdShpUY2jRcSKn5sg.jpeg"
                />
                <Card.Body>
                  <Card.Title>Advanced Python Programming - 2022</Card.Title>
                  <Card.Text>
                    Improve your Python programming skills and solve over 100
                    advanced Python problems!
                  </Card.Text>
                  <Link href="https://www.udemy.com/course/advanced-exercises-python-programming/">
                    View more
                  </Link>
                  <Card.Text>
                    <small class="text-muted">4/2022</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://miro.medium.com/max/750/1*We_yPZdShpUY2jRcSKn5sg.jpeg"
                />
                <Card.Body>
                  <Card.Title>Advanced C Programming Course</Card.Title>
                  <Card.Text>
                    Become a True Master of the C Programming Language -
                    Confidently Apply for Real Time or Embedded C Jobs or
                    contracts!
                  </Card.Text>
                  <Link href="https://www.udemy.com/course/advanced-c-programming-course/">
                    View more
                  </Link>
                  <Card.Text>
                    <small class="text-muted">8/2021</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://miro.medium.com/max/750/1*We_yPZdShpUY2jRcSKn5sg.jpeg"
                />
                <Card.Body>
                  <Card.Title>Deep Learning Specialization</Card.Title>
                  <Card.Text>
                    Become a Machine Learning expert. Master the fundamentals of
                    deep learning and break into AI. Recently updated with
                    cutting-edge techniques!
                  </Card.Text>
                  <Link href="https://www.coursera.org/professional-certificates/tensorflow-in-practice">
                    View more
                  </Link>
                  <Card.Text>
                    <small class="text-muted">3/2022</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://miro.medium.com/max/750/1*We_yPZdShpUY2jRcSKn5sg.jpeg"
                />
                <Card.Body>
                  <Card.Title>
                    DeepLearning.AI TensorFlow Developer Professional
                    Certificate
                  </Card.Title>
                  <Card.Text>
                    Best practices for TensorFlow, a popular open-source machine
                    learning framework to train a neural network for a computer
                    vision applications.
                  </Card.Text>
                  <Link href="https://www.coursera.org/specializations/deep-learning">
                    View more
                  </Link>
                  <Card.Text>
                    <small class="text-muted">3/2022</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </>

      {/* create a repsonsive search bar tahts full with in container */}
      <>
        <div class="container" style={{ marginTop: "20px" }}>
          <div>
            <div>
              <Card>
                <Card.Body>
                  <Card.Title>Search:</Card.Title>
                  <center>
                    <Card.Title>
                      <Form inline>
                        <Form.Control
                          type="text"
                          placeholder="Search for Language, Topic, Project ..."
                          className="mr-sm-2"
                          onChange={(e) => setSearch(e.target.value)}
                        />

                        <Button
                          style={{ marginTop: "20px" }}
                          variant="outline-primary"
                          onClick={() => redirectToPage(search)}
                        >
                          Search
                        </Button>
                      </Form>
                    </Card.Title>
                  </center>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </>

      <footer
        class="bg-dark text-center text-lg-start"
        style={{ marginTop: "2vh", color: "white" }}
      >
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">All languages</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/Python" style={{ color: "white" }}>
                    Python
                  </a>
                </li>
                <li>
                  <a href="/Go" style={{ color: "white" }}>
                    Go
                  </a>
                </li>
                <li>
                  <a href="/C++" style={{ color: "white" }}>
                    C++
                  </a>
                </li>
                <li>
                  <a href="/Javascript" style={{ color: "white" }}>
                    Javascript
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">&nbsp;</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/Php" style={{ color: "white" }}>
                    Php
                  </a>
                </li>
                <li>
                  <a href="/Java" style={{ color: "white" }}>
                    Java
                  </a>
                </li>
                <li>
                  <a href="/Rust" style={{ color: "white" }}>
                    Rust
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Topics</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/javascript?topic=npm" style={{ color: "white" }}>
                    npm
                  </a>
                </li>
                <li>
                  <a href="/python?topic=pandas" style={{ color: "white" }}>
                    pandas
                  </a>
                </li>
                <li>
                  <a href="/javascript?topic=react" style={{ color: "white" }}>
                    React
                  </a>
                </li>
                <li>
                  <a href="/javascript?topic=node" style={{ color: "white" }}>
                    node
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">&nbsp;</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/javascript?topic=nextjs" style={{ color: "white" }}>
                    Nextjs
                  </a>
                </li>
                <li>
                  <a href="/c++?topic=algorithms" style={{ color: "white" }}>
                    algorithms
                  </a>
                </li>
                <li>
                  <a href="/javascript?topic=api" style={{ color: "white" }}>
                    api
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center p-3">
          © 2022 Copyright:
          <a href="/"> Appsplosion</a>
        </div>
      </footer>
    </>
  );
};

export async function getServerSideProps(context) {

  const res = await fetch("https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=8")
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}
export default Home;
