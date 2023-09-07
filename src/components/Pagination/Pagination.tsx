import { Dispatch, FC, SetStateAction } from 'react';
import PaginationBtn from '../PaginationBtn/PaginationBtn';
import { PaginationStyled } from './PaginationStyled';
import SearchBar from '../SearchBar/SearchBar';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

interface Props {
  setPage: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
  page: number;
  maxPages: number;
};

const Pagination: FC<Props> = ({ setPage, setLimit, page, maxPages }) => {
  const buttonNumbers = [page - 2, page - 1, page, page + 1, page + 2];

  return (

    <PaginationStyled page={page}>
      <ul className="buttons">
        <PaginationBtn
          className="arrow"
          onClick={() => setPage(0)}
          disabled={page === 0}
          dataTestId="Go to first page"
          aria-label="Button to navigate through the paging"
        >
          <MdKeyboardDoubleArrowLeft
            className="arrow-icon"
            aria-label="Button to navigate through the paging"
          />
        </PaginationBtn>
        <PaginationBtn
          className="arrow"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          dataTestId="Go to previous page"
          aria-label="Button to navigate through the paging"
        >
          <MdKeyboardArrowLeft
            className="arrow-icon"
            aria-label="Button to navigate through the paging"
          />
        </PaginationBtn>
        {buttonNumbers.map((buttonNumber) =>
          buttonNumber >= 0 && buttonNumber <= maxPages ? (
            <PaginationBtn
              onClick={(e) => setPage(+e.currentTarget.innerHTML)}
              disabled={buttonNumber === page}
              className={buttonNumber === page ? 'active' : ''}
              key={buttonNumber}
              aria-label="Button to navigate through the paging"
            >
              {buttonNumber}
            </PaginationBtn>
          ) : (
            <PaginationBtn
              disabled
              key={buttonNumber}
              aria-label="Button to navigate through the paging"
            >
              {buttonNumber}
            </PaginationBtn>
          )
        )}
        <PaginationBtn
          className="arrow"
          onClick={() => setPage(page + 1)}
          disabled={page === maxPages}
          dataTestId="Go to next page"
          aria-label="Button to navigate through the paging"
        >
          <MdKeyboardArrowRight
            className="arrow-icon"
            aria-label="Button to navigate through the paging"
          />
        </PaginationBtn>
        <PaginationBtn
          className="arrow"
          onClick={() => setPage(maxPages)}
          disabled={page === maxPages}
          dataTestId="Go to last page"
          aria-label="Button to navigate through the paging"
        >
          <MdKeyboardDoubleArrowRight
            className="arrow-icon"
            aria-label="Button to navigate through the paging"
          />
        </PaginationBtn>
      </ul>

      <div className="results">
        <label className='results-label'>
          Page results
          <select
            onChange={(e) => {
              setLimit(+e.currentTarget.value);
              setPage(0);
            }}
          >
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
        </label>
      </div>

      <div className='searchBarContainer'>
        <SearchBar />
      </div>

    </PaginationStyled>
  );
};

export default Pagination;
