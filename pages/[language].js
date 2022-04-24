import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Language = () => {
  const router = useRouter()
  const { language } = router.query

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
      <h1>welcome {language} programmer</h1>
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

     

        <h1><a href={"https://de.coursera.org/search?query=" + language} >Check out these courses for: {language} </a></h1>
      </ul>
    </div>
  );
};



export default Language