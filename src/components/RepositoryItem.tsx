interface Repositoryitemprops {
    repository: {
        name: string,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem(props: Repositoryitemprops) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description ?? 'Default'}</p>
            <a href={props.repository?.html_url ?? '#'}>Acessar repositorio</a>
        </li>
    );
}