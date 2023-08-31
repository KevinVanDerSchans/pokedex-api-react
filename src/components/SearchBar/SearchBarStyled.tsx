import styled from 'styled-components';

export const SearchBarStyled = styled.section`

  display: flex;
  justify-content: right;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 4rem;
  width: 100%;
  padding: 30px;
  gap: 1.4rem;
  color: #ede7e7;
  background-color: #9e3e3e;
  background: linear-gradient(to bottom, #a52121, #581a1a);

  .searchers-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .input-button-search,
  .input-button-filter {
    width: 60px;
    height: 44px;
    border-radius: 50%;
    padding: 0.3rem;
    border-radius: 50%;
    background-color: #7a7777;
    cursor: pointer;
  }

  .input-button-search:hover,
  .input-button-filter:hover {
    background-color: #a09b9b;
  }

  .input-button-filter:hover {
    cursor: pointer;
  }

  .search-text-placeholder {
    font-size: 0.9rem;
    padding: 0.2rem;
    cursor: default;
  }

  .search-text-placeholder::placeholder {
    color: #bdb9b9;
    font-size: 1rem;
    font-family: 'Pocket Monk';
  }





  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    font-size: small;

    .form-input-container {
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.35);
      box-shadow: 0 3px 15px 0 rgba(31, 38, 135, 0.37);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .form-input-container:hover {
      background-color: #918f8f;
    }

    input {
      width: 190px;
      cursor: default;
    }

    input,
    button,
    select {
      font-size: 0.9rem;
      background-color: transparent;
      border: 0;
      color: #f5f3f3;
      font-family: 'Pocket Monk';

      :focus {
        outline: none;
      }
      ::placeholder {
        color: #e5dfdf;
        font-size: 1rem;
      }
    }

    select {
      font-size: 1.1rem;

      margin-right: 0.8rem;
      cursor: pointer;
    }
  }






  @media (max-width: 540px) {
    gap: 1rem;
    padding: 20px 10px;
    label {
      font-size: 0.8rem;
      input {
        width: 100px;
      }
      input,
      button,
      select {
        font-size: 0.7rem;
      }
    }
  }
`;
