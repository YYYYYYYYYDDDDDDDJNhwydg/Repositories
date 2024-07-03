import React from 'react';
import RepositoryItem from './RepositoryItem';

interface RepositoryListProps {
    repositories: any[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({repositories}) => {
    return (
        <ul>
          {repositories.map(({ node }) => (
            <RepositoryItem key={node.id} node={node}/>
          ))}
        </ul>
    );
};

export default RepositoryList;