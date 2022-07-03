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
                <>
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
                                {results.twitter_username === '' ? '' : <li><i class="fa-brands fa-twitter"></i> <a href={`https://twitter.com/${results.twitter_username}`} target="_blank" rel='noreferrer'>{results.twitter_username}</a></li>}
                            </ul>
                            <div id="repos">
                                <h2>
                                    Current 5 repositories
                                </h2>
                                {repoDetails?.map(showRepo).slice(0, 5)}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Results