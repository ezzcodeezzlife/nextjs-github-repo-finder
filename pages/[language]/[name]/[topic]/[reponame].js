import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Language = () => {
  const router = useRouter()
  const { language } = router.query
  const { name } = router.query
  const { topic } = router.query
  const { reponame } = router.query

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(
      "https://api.github.com/search/repositories?q=" + String(language) + "&sort=stars&order=desc&per_page=3"
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
    if(!language) {
      return;
    }
    fetchData();
  }, [language]);

  return (
    <div>
      <h1>welcome {name} {language} programmer</h1>
      <h2>We found your repo {reponame}</h2>
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : (
          repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.full_name}</a>
              <p>{repo.description}</p>
              <p>{repo.stargazers_count} ⭐ stars</p>
              <p>{repo.language}</p>
              <p>{repo.updated_at}</p>

            </li>
          ))
        )}

     
       <h2>Because i like the topic <b>{topic} </b> you maybe like this:</h2>
        <h1><a href={"https://de.coursera.org/search?query=" + language} >Check out these courses for: {language} </a></h1>
      </ul>
    </div>
  );
};



export default Language