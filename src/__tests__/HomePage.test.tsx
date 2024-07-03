// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import HomePage from '../Pages/HomePage';
// import MyInput from '../components/UI/Input/MyInput';
// import Pagination from '../components/UI/Pagination/Pagination';

// test('HomePage рендерит основные компоненты', () => {
//   render(<HomePage />);
//   expect(screen.getByPlaceholderText('Поиск репозитория...')).toBeInTheDocument();
//   expect(screen.getByText('Github Repositories')).toBeInTheDocument();
// });

// test('Обработка ввода в MyInput', () => {
//   render(<MyInput value="" onChange={jest.fn()} placeholder="Поиск репозитория..." />);
//   const input = screen.getByPlaceholderText('Поиск репозитория...');
//   fireEvent.change(input, { target: { value: 'react' } });
//   expect((input as HTMLInputElement).value).toBe('react');
// });

// test('Обработка изменения страницы в Pagination', () => {
//   const onPageChange = jest.fn();
//   render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} isSearchQuery={true} />);
//   fireEvent.click(screen.getByText('2'));
//   expect(onPageChange).toHaveBeenCalledWith(2);
// });
