import React from 'react';
import { Link } from 'react-router-dom';

interface RepositoryItemProps {
    node: {
        id: string;
        name: string;
        owner: {
            login: string;
        };
        description: string;
        stargazerCount: number;
        pushedAt: string;
        url: string;
    };
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ node }) => {
    return (
        <li key={node.id}>
            <Link to={`/repo/${node.owner.login}/${node.name}`}>
                {node.name} - {node.stargazerCount} stars - Last commit: {new Date(node.pushedAt).toLocaleDateString()}  
            </Link>
            <Link to={node.url} target="_blank" rel="noopener noreferrer"> Посмотреть на Github</Link>
        </li>
    );
};

export default RepositoryItem;