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
} from "react-bootstrap";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(
      "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=8"
    )
      .then((response) => {
        return response.json();
      })
      .then((repos) => {
        setRepos(repos.items);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Repofy
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
                  All anguages
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
                <h1 class="display-4">Welcome!</h1>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
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
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        //create a resposive grid with bootstrap cards for each repo in the array of repos from the api call
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
      )}
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
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>
                    <small class="text-muted">Last updated 3 mins ago</small>
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
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>
                    <small class="text-muted">Last updated 3 mins ago</small>
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
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>
                    <small class="text-muted">Last updated 3 mins ago</small>
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
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
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
              <h5 class="text-uppercase mb-0">Courses</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/Python" style={{ color: "white" }}>
                    Python
                  </a>
                </li>
                <li>
                  <a href="/javascript" style={{ color: "white" }}>
                    javascript
                  </a>
                </li>
                <li>
                  <a href="/go" style={{ color: "white" }}>
                    Go
                  </a>
                </li>
                <li>
                  <a href="/rust" style={{ color: "white" }}>
                    Rust
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center p-3">
          © 2022 Copyright:
          <a href="/"> Repofy</a>
        </div>
      </footer>
    </>
  );
};

export default Home;
