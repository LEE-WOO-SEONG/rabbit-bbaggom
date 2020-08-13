import styled, { css } from 'styled-components';

export const SideTab = styled.section`
  ${commonstyle()}

  ${props =>
    props.token === null
      ? css`
          button {
            padding: 20px 25px 20px 45px;

            i {
              position: absolute;
              top: 23px;
              left: 35px;
              font-size: 1.2rem;
            }
          }
        `
      : css`
          button {
            padding: 20px 30px;
          }
        `}
`;

// 공통 스타일
function commonstyle() {
  return css`
    ul {
      padding-left: 0;
      padding-right: 20px;
      list-style-type: none;
      min-height: 500px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      li > a {
        font-weight: bold;
        font-size: 1.3rem;
        color: white;
        text-decoration: none;
        padding: 15px 30px;
        border-radius: 9999px;
        background-color: transparent;
        transition: background-color 0.3s;

        cursor: pointer;

        &:hover {
          background-color: rgba(244, 93, 34, 0.2);
        }
      }

      li:nth-child(1) > a {
        display: block;
        width: 50px;
      }

      button {
        position: relative;
        font-size: 1.03rem;
        color: #fff;
        background-color: rgb(244, 93, 34);
        border: none;
        width: 100%;
        border-radius: 9999px;
        cursor: pointer;
      }
    }
  `;
}
