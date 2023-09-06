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
  margin: 1rem 0 2rem;

  .results {
    display: flex;
    position: absolute;
    align-items: center;
    font-size: 1.2rem;
    margin-left: 0.4rem;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      select {
        font-size: 1rem;
        padding: 8px 6px;
        border-radius: 15px;
        background-color: #a15c5c;
        color: #fff;
        font-weight: 700;
      }

      option {
        border-radius: 15px;
      }
    }
  }

  .results-label {
    color: #e6e5e5;
  }

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
        padding: 10px;
        background-color: transparent;
        font-weight: 700;
        cursor: pointer;

        button:hover {
          background: #cfa0a0;
        }
        :disabled:not(.arrow, .active) {
          color: transparent;
        }
        :hover:not(.active, :disabled) {
          background: #cfa0a0;
        }
      }
      .active {
        background-color: #d69898;
        color: #202020;
        outline: none;
      }
    }

    label select {
      background-color: white;
    }


    @media (max-width: 905px) {

      .results {
        position: relative;
      }

      li {
        button {
          position: relative;
          right: 20px;
          width: 26px;
          padding: 8px 0;
          font-size: 0.7rem;
          margin: 0;
        }
      }

      .results-label {
        color: #e1dddd;
        font-size: 0.4rem;
      }
    }
  }


  @media (max-width: 875px) {

    flex-direction: column;
    gap: 20px;
    padding: 0;

    .results {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 1rem;
      margin-left: 0.4rem;


    label {
      display: flex;
      align-items: center;

      select {
        width: 3.4rem;
        font-size: 1rem;
        padding: 4px 6px;
        border-radius: 15px;
        font-weight: 700;
      }

      option {
        border-radius: 15px;
      }
    }
  }

    .results-label {
      font-size: 1.2rem;
    }

    .buttons {
      position: relative;
      margin: 0;
      top: 120px;
      left: 20px;
    }

    li {
      button {
        position: relative;
        right: 20px;
        width: 26px;
        padding: 8px 0;
        font-size: 1rem;
        margin: 0;
      }
    }

    .searchBarContainer {
      display: flex;
      position: absolute;
      justify-content: right;
    }
  }

  .arrow-icon {
    color: #d7d5d5;
    font-size: 1rem;
    font-weight: 900;
  }
`;
