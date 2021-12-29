import React,{useContext} from 'react'

import ReposItem from './ReposItem.js'
import GithubContext from '../../context/github/githubContext.js'

export const Repos = () => {
    const githubContext = useContext(GithubContext);
    return (
         githubContext.repos.map(repo => <ReposItem repo={repo} key={repo.id} />)

    )
}


export default Repos
