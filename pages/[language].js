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
    fetch(
      "https://api.github.com/search/repositories?q=" +
        String(language) +
        "&sort=stars&order=desc&per_page=4" /// + topic
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
      
        <nav
          class="navbar navbar-dark bg-dark"
          aria-label="First navbar example"
        >
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


      <div class="container" style={{paddingTop: "2vh"}}>
        {name ? (
          <div class="jumbotron">
            <h1 class="display-4">Hello, {name}!</h1>
            <p class="lead">
              We found your reposeto <b>{reponame} </b> and it looks really interesting.
            </p>
            <p class="lead">Because you like the topic <b>{topic}</b> you should have a look at this:</p>
            <hr class="my-4"></hr>
            

            


            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#content" role="button">
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
            
            <div class="card"  id="content" style={{marginTop: "1vw"}}>
            <Card>
              <Card.Body>
                <Card.Title> {repo.name}</Card.Title>
                <Card.Text>{repo.description}</Card.Text>
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
                <Badge bg="info">{repo.language}</Badge>
              </Card.Header>
            </Card>
          </div>

          
          ))
        )}


        <center>
        <div style={{paddingTop: "2vh"}}>
        <form action={"/" + language}>
          <button className="btn btn-outline-primary" type="submit">
            See more {language} projects
          </button>
        </form>
        </div>
        </center> 
       
       
       
        <div class="card text-center" style={{marginTop: "2vh"}}>
          <div class="card-header">
            Featured
          </div>
          <a href={"https://de.coursera.org/search?query=" + language}>
          <div class="card-body">
            <h5 class="card-title">Check out these courses for: {language}{" "}</h5>
            <p class="card-text">Many of them cover the topic "{topic}"!</p>
            <a class="btn btn-primary">Go somewhere</a>
          </div>
          </a>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
        </div>

        <footer class="bg-dark text-center text-lg-start" style={{marginTop: "2vh", color:"white"}}>

  <div class="container p-4">
   
    <div class="row">
     
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">All languages</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="/Python" style={{color:"white"}}>Python</a>
          </li>
          <li>
          <a href="/Go" style={{color:"white"}}>Go</a>
          </li>
          <li>
          <a href="/C++" style={{color:"white"}}>C++</a>
          </li>
          <li>
          <a href="/Javascript" style={{color:"white"}}>Javascript</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
          <li>
          <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
          <li>
          <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
          <li>
          <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
          <li>
          <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
          <li>
          <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
          <li>
          <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
          <li>
          <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
          <li>
          <a href="#!" style={{color:"white"}}>Link 1</a>
          </li>
          <li>
          <a href="#!" style={{color:"white"}}>Link 1</a>
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

export default Language;
