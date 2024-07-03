import React from 'react';
import styles from './Paginatoin.module.scss'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isSearchQuery: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, isSearchQuery }) => {
  const pages: number[] = [];
  const maxPages = 10

  if (isSearchQuery) {
    for (let i = 1; i <= maxPages; i++) {
        pages.push(i);
      }
  } else {
    for (let i = 1; i <= maxPages && i <= totalPages; i++) {
        pages.push(i);
      }
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <button
          key={page}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? styles.active : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;