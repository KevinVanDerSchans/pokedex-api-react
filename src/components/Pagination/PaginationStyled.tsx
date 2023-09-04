import styled from 'styled-components'

interface StyledProps {
  page: number,
};

export const PaginationStyled = styled.section<StyledProps>`
  width: fit-content;
  display: flex;
  margin: 0 auto;
  width: 100%;
  padding: 0 2.2rem;
  align-items: center;
  margin: 2rem 0 2rem;

  .buttons {
    width: fit-content;
    display: flex;
    margin: 0 auto;
    padding: 24px;
    margin-left: 260px;

    li {
      button {
        width: 34px;
        border: none;
        border-radius: 50%;
        padding: 9px;
        background-color: transparent;
        font-weight: 700;
        cursor: pointer;

        button:hover {
          background: #cfa0a0;
        }
        :disabled:not(.arrow, .active) {
          color: transparent;
          cursor: default;
        }
        :hover:not(.active, :disabled) {
          background: #cfa0a0;
        }
      }
      .active {
        background-color: #cc4e4e;
        color: #202020;
        outline: none;
      }
    }
  }

  .arrow-icon {
    color: #000000;
    font-size: 1rem;
    font-weight: 900;
  }

  .results {
    position: absolute;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-left: 0.4rem;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      select {
        width: 3.4rem;
        font-size: 1rem;
        padding: 6px 6px;
        border-radius: 15px;
        background-color: #cc4e4e;
        color: #fff;
        font-weight: 700;
      }

      option {
        border-radius: 15px;
      }
    }
  }
`;
