import React from 'react';

const Results = ({ results, repoDetails }) => {

    const showRepo = (repo) => {
        return (
            <div key={repo.id}>
                <h2>
                    <a href={`${repo.html_url}`} target="_blank" rel='noreferrer'>
                        {repo.name}
                    </a>
                </h2>
            </div>
        )
    }

    return (
        <>
            {results === '' ? (
                <div>
                    <h2>
                        No users of this name
                    </h2>
                </div>
            ) : (
                <div className="card">
                    <div className='profile-img'>
                        <img src={`${results.avatar_url}`} alt={`${results.name}`} className="avatar" />
                    </div>
                    <div className="results-info">
                        <a href={`${results.html_url}`} target="_blank" rel='noreferrer' className='profile-link'>
                            <h2>{results.name === '' ? results.login : results.name}</h2>
                        </a>
                        <h3 className='profile-bio'>{results.bio ? `${results.bio}` : ''}</h3>
                        {results.location === '' ? '' : <p><i className="fa-solid fa-location-dot"></i> {results.location}</p>}
                        <ul className='profile'>
                            <li>{results.followers} <strong>Followers</strong></li>
                            <li>{results.following} <strong>Following</strong></li>
                            <li>{results.public_repos} <strong>Repos</strong></li>
                            <li>{results.twitter_username === '' ? '' : results.twitter_username}</li>
                        </ul>
                        <div id="repos">
                            {repoDetails?.map(showRepo)}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Results