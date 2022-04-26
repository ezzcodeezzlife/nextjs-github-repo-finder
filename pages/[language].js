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

const Language = () => {
  const router = useRouter();
  //const [language, setLanguage] = useState(router.query.language)
  const { language } = router.query;
  const name = router.query.name;
  const topic = router.query.topic;
  const reponame = router.query.reponame;

  //http://localhost:3000/py?name=asd&topic=pandas&reponame=nogga    sad

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    if (!topic) {
      fetch(
        "https://api.github.com/search/repositories?q=" +
          String(language) +
          "&sort=stars&order=desc&per_page=8" /// + topic
      )
        .then((response) => {
          return response.json();
        })
        .then((repos) => {
          setRepos(repos.items);
          setLoading(false);
        });
    } else {
      fetch(
        "https://api.github.com/search/repositories?q=" +
          String(language) +
          " " +
          String(topic) +
          "&sort=stars&order=desc&per_page=8" /// + topic
      )
        .then((response) => {
          return response.json();
        })
        .then((repos) => {
          setRepos(repos.items);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (!language) {
      return;
    }
    fetchData();
  }, [language]);

  return (
    <>
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

      <div class="container" style={{ paddingTop: "2vh" }}>
        {name ? (
          <div class="jumbotron">
            <h1 class="display-4">Hello, {name}!</h1>
            <p class="lead">
              We found your repository <b>{reponame} </b> and it looks really
              interesting.
            </p>
            <p class="lead">
              Because you like the topic <b>{topic}</b> you should have a look
              at this:
            </p>
            <hr class="my-4"></hr>

            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#content" role="button">
                See more
              </a>
            </p>
          </div>
        ) : (
          <>
            <h2>
              {" "}
              {language} {topic}{" "}
            </h2>
            <h5> You may like these repos:</h5>
          </>
        )}

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

                      {repo.topics ? (
                        <>
                          {repo.topics.map((topic) => (
                            <a href={"/" + language + "?topic=" + topic}>
                              <button
                                className="btn btn-outline-secondary btn-sm"
                                type="submit"
                                style={{ margin: "1px" }}
                              >
                                {topic}
                              </button>
                            </a>
                          ))}
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

                      {repo.homepage ? (
                        <Link href={repo.homepage}>
                          <Button
                            variant="secondary"
                            style={{ marginLeft: "5px" }}
                          >
                            <GoGlobe /> Website
                          </Button>
                        </Link>
                      ) : (
                        <></>
                      )}
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

<>
        {name ? (
          <center>
            <div style={{ paddingTop: "2vh" }}>
              <form action={"/" + language}>
                <button className="btn btn-primary" type="submit">
                  See more {language} projects
                </button>
              </form>
            </div>
          </center>
        ) : (
          <></>
        )}

{topic ? (
          <center>
            <div style={{ paddingTop: "2vh" }}>
              <form action={"/" + language}>
                <button className="btn btn-primary" type="submit">
                  See more {language} projects
                </button>
              </form>
            </div>
          </center>
        ) : (
          <></>
        )}
        </>

        <>
          {/* create two cards which to gether span full width*/}
          <div class="row">
            <div class="col-sm-6">
              <div class="card" style={{ marginTop: "1vw" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href={"https://de.coursera.org/search?query=" + language}
                >
                  <Card>
                    <Card.Body>
                      <img
                        class="card-img-top"
                        src="https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Card image cap"
                      ></img>
                      <Card.Title>
                        <br></br>
                        Cousera Courses - {language}
                      </Card.Title>
                      <Card.Text>
                        <p>
                          Check out the great courses on cousera.com. Many of
                          them in the language you are interested in.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card" style={{ marginTop: "1vw" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href={
                    "https://www.udemy.com/courses/search/?src=ukw&q=" +
                    language
                  }
                >
                  <Card>
                    <Card.Body>
                      <img
                        class="card-img-top"
                        src="https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Card image cap"
                      ></img>
                      <Card.Title>
                        <br></br>
                        Udemy Courses - {language}
                      </Card.Title>
                      <Card.Text>
                        <p>
                          Check out the great courses on Udemy.com. Many of them
                          in the language you are interested in.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </>
      </div>

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

export default Language;
