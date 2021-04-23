import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])  
    // useState<Repository[]> por conta do tsc, são vários reps então precisa do []
    //https://api.github.com/users/goldbergyoni/repos
    //https://api.github.com/orgs/rocketseat/repos
    useEffect(() => {
        fetch('https://api.github.com/users/goldbergyoni/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
                
            </ul>
        </section>
    )
}