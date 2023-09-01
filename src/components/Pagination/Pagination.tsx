import { Dispatch, FC, SetStateAction } from 'react';
import PaginationBtn from '../PaginationBtn/PaginationBtn';
import { PaginationStyled } from './PaginationStyled';
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
}

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
        >
          <MdKeyboardDoubleArrowLeft
            className="arrow-icon"
          />
        </PaginationBtn>
        <PaginationBtn
          className="arrow"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          dataTestId="Go to previous page"
        >
          <MdKeyboardArrowLeft
            className="arrow-icon"
          />
        </PaginationBtn>
        {buttonNumbers.map((buttonNumber) =>
          buttonNumber >= 0 && buttonNumber <= maxPages ? (
            <PaginationBtn
              onClick={(e) => setPage(+e.currentTarget.innerHTML)}
              disabled={buttonNumber === page}
              className={buttonNumber === page ? 'active' : ''}
              key={buttonNumber}
            >
              {buttonNumber}
            </PaginationBtn>
          ) : (
            <PaginationBtn disabled key={buttonNumber}>
              {buttonNumber}
            </PaginationBtn>
          )
        )}
        <PaginationBtn
          className="arrow"
          onClick={() => setPage(page + 1)}
          disabled={page === maxPages}
          dataTestId="Go to next page"
        >
          <MdKeyboardArrowRight
            className="arrow-icon"
          />
        </PaginationBtn>
        <PaginationBtn
          className="arrow"
          onClick={() => setPage(maxPages)}
          disabled={page === maxPages}
          dataTestId="Go to last page"
        >
          <MdKeyboardDoubleArrowRight
            className="arrow-icon"
          />
        </PaginationBtn>
      </ul>

      <div className="results">
        <label>
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
    </PaginationStyled>
  );
};

export default Pagination;
