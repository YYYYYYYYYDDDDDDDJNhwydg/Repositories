import { gql } from '@apollo/client';

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
            description
            stargazerCount
            pushedAt
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const CURRENT_USER_REPOSITORIES = gql`
  query CurrentUserRepositories($first: Int!, $after: String) {
    viewer {
      repositories(first: $first, after: $after) {
        edges {
          node {
            id
            name
            owner {
              login
            }
            description
            stargazerCount
            pushedAt
            url
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      owner {
        login
        avatarUrl
        url
      }
      description
      stargazerCount
      pushedAt
      languages(first: 10) {
        nodes {
          name
        }
      }
    }
  }
`;