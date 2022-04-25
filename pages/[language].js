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

  //http://localhost:3000/py?name=asd&topic=pandas&reponame=nogga

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(
      "https://api.github.com/search/repositories?q=" +
        String(language) +
        "&sort=stars&order=desc&per_page=3" /// + topic
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
    if (!language) {
      return;
    }
    fetchData();
  }, [language]);

  return (
    <>
      <div>
        <nav
          class="navbar navbar-dark bg-dark"
          aria-label="First navbar example"
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Never expand
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
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
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

        {name ? (
          <div class="jumbotron">
            <h1 class="display-4">Hello, {name}!</h1>
            <p class="lead">
              We found your repo <b>{reponame}</b> and it looks really great!
            </p>
            <hr class="my-4"></hr>
            <p>Because i like the topic {topic} you maybe like this:</p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#projects" role="button">
                See more
              </a>
            </p>
          </div>
        ) : (
          <></>
        )}

        


      
          {loading ? (
            <p>Loading...</p>
          ) : (
            
            repos.map((repo) => (
              <Card>
                  <Card.Body>
                    <Card.Title> {repo.name}</Card.Title>
                    <Card.Text>
                     {repo.description}
                    </Card.Text>
                    <Button
                      id="homepagebutton"
                      href={repo.html_url}
                      variant="primary"
                    >
                      <GoMarkGithub></GoMarkGithub> GitHub
                    </Button>{" "}
                    <Button
                      id="homepagebutton"
                      href={repo.homepage}
                      variant="secondary"
                    >
                      <GoGlobe></GoGlobe> Homepage
                    </Button>
                  </Card.Body>
                  <Card.Header>
                    <Badge bg="secondary"> ⭐ {repo.stargazers_count}</Badge> ▪️{" "}
                    <Badge bg="secondary"> 🍴 {repo.forks_count}</Badge> ▪️{" "}
                    <Badge bg="info">{repo.language}</Badge>
                  </Card.Header>
                </Card>
            )
            )
          

          
          )}

<h1>
            <a href={"/" + language}>
              See more: {language} projects{" "}
            </a>
          </h1>
          <h1>
            <a href={"https://de.coursera.org/search?query=" + language}>
              Check out these courses for: {language}{" "}
            </a>
          </h1>
        
      </div>
    </>
  );
};

export default Language;
