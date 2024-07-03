import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_REPOSITORY } from '../graphql/queries';


const RepositoryPage: React.FC = () => {
    const { owner, name } = useParams<{ owner: string; name:string}>();
    const { loading, error, data } = useQuery(GET_REPOSITORY, {
        variables: { owner, name },
    });

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error: {error.message}</p>

    const {repository} = data;

    return (
        <main>
            <h1>{repository.name}</h1>
            Stars: {repository.stargazerCount} - Last commit: {new Date(repository.pushedAt).toLocaleDateString()} 
            <div>
                <img src={repository.owner.avatarUrl} alt={`${repository.owner.login} avatar`} style={{ width: '50px', borderRadius: '50%' }} />
                <p>
                    <a href={repository.owner.url} target='_blank' rel='nooperer noreferrer'> {repository.owner.login}</a>
                </p>
            </div>
            <div>
                <h3> Используемые языки: </h3>
                <ul>
                    {repository.languages.nodes.map((language : any) => (
                        <li key={language.name}>
                            {language.name}
                        </li>
                    ))}
                </ul>
            </div>
            <p>
                {repository.description}
            </p>
        </main>
    );
};

export default RepositoryPage;