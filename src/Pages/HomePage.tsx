import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import MyInput from '../components/UI/Input/MyInput';
import { CURRENT_USER_REPOSITORIES, SEARCH_REPOSITORIES } from '../graphql/queries';
import RepositoryList from '../components/RepositoryList';
import Pagination from '../components/UI/Pagination/Pagination';

const HomePage: React.FC = () => {
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [currentPage, setCurrentPage] = useState(Number(localStorage.getItem('currentPage')) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [cursors, setCursors] = useState<{ [key: number]: string | null }>({ 1: null });

  const isSearchQuery = Boolean(query);

  const { loading, error, data } = useQuery(
    isSearchQuery ? SEARCH_REPOSITORIES : CURRENT_USER_REPOSITORIES,
    {
      variables: {
        query,
        first: 10,
        after: cursors[currentPage],
      }
    }
  );

  useEffect(() => {
    if (data) {
      const pageInfo = query ? data.search.pageInfo : data.viewer.repositories.pageInfo;
      setTotalPages(pageInfo.hasNextPage ? currentPage + 1 : currentPage);

      if (pageInfo.endCursor) {
        setCursors((prevCursors) => ({
          ...prevCursors,
          [currentPage + 1]: pageInfo.endCursor,
        }));
      }
    }
  }, [data, query, currentPage]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setCurrentPage(1);
    setCursors({ 1: null });
    localStorage.setItem('query', newQuery);
    localStorage.setItem('currentPage', '1');

  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', String(page));
  };

  const repositories = isSearchQuery ? data?.search?.edges : data?.viewer?.repositories?.edges;

  return (
    <main>
      <h1>Github Repositories</h1>
      <MyInput
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Поиск репозитория..."
      />
      <div className="content-container">
        {loading && <div className="placeholder">Loading...</div>}
        {error && <p>Error: {error.message}</p>}
        {!loading && !error && repositories && repositories.length === 0 && query && (
          <p>Ничего не найдено по этому запросу </p>
        )}
        {repositories && <RepositoryList repositories={repositories} />}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        isSearchQuery={isSearchQuery}
      />
    </main>
  );
};

export default HomePage;