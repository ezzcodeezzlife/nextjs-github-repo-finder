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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

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
                    <a class="dropdown-item" href="/go">
                      Go
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
       //create a resposive grid with bootstrap cards for each repo in the array of repos from the api call
        <div class="container">
          <div class="row">
            {repos.map((repo) => (
              <div class="col-sm-6 col-md-4 col-lg-3" style={{ marginTop: "20px" }}>
                <Card>
                  <Card.Img variant="top" src={repo.owner.avatar_url} />
                  <Card.Body>
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Text>{repo.description}</Card.Text>
                    <Card.Text>{repo.language}</Card.Text>
                    <Card.Text>{repo.stargazers_count} ⭐</Card.Text>
                    
                    
                    <Link href={repo.html_url}>
                      <Button variant="primary">
                        <GoMarkGithub />
                         Github
                      </Button>
                    </Link>
                    
                    <Link href={repo.homepage}>
                      <Button variant="secondary" style={{ marginLeft: "5px" }}>
                        <GoGlobe />
                        Website
                      </Button>
                    </Link>
                    


                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}


      <div class="container" style={{ paddingTop: "2vh" }}>
        <div class="card text-center" style={{ marginTop: "2vh" }}>
          <div class="card-header">Featured</div>
          <a href={"https://de.coursera.org/"}>
            <div class="card-body">
              <h5 class="card-title">Check out these courses </h5>

              <a class="btn btn-primary">Go somewhere</a>
            </div>
          </a>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
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
              <h5 class="text-uppercase mb-0">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Link 1
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center p-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/">Repofy.com</a>
        </div>
      </footer>
    </>
  );
};

export default Home;
