import React from 'react';
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss';

interface Repository {
    name: string,
    description: string,
    html_url: string,
}

export function Repositorylist() {

    const [respositories, setRespositories] = React.useState<Repository[]>([]);

    React.useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => {
                // console.log('Data', data);
                setRespositories(data);
            })
    }, []);


    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {respositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />;
                })}

            </ul>

        </section>
    );
}