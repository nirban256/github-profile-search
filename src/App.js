import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Results from './Results';

const App = () => {

  const [username, setUsername] = useState('');
  const [results, setResults] = useState('');
  const [repoDetails, setRepoDetails] = useState([]);

  const baseUrl = 'https://api.github.com/users/';

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(username);
    getRepos(username);
    setUsername('');
  }

  const getUser = (user) => {
    axios({
      method: "get",
      url: `${baseUrl}${user}`,
    }).then(res => {
      setResults(res.data);
    })
  }

  const getRepos = (user) => {
    axios({
      method: "get",
      url: `${baseUrl}${user}/repos?sort=created`
    }).then(res => {
      setRepoDetails(res.data);
    })
  }

  return (
    <div>
      <form className='user-form'>
        <input value={username} placeholder="Search User" onChange={e => setUsername(e.target.value)} />
        <button type='submit' onClick={handleSubmit}>
          Search
        </button>
      </form>
      {results ? <Results results={results} repoDetails={repoDetails} /> : ''}
    </div>
  );
}

export default App;
