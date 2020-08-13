import styled from 'styled-components';

export const PreviewSection = styled.section`
  padding: 20px 10%;
  overflow-y: hidden;

  .preview {
    textarea {
      display: block;
      resize: none;
      box-sizing: border-box;
      border: none;
      border-radius: 5px;
      padding: 10px;
      width: 100%;
      min-height: 70px;
      font-size: 1.1rem;
    }

    p {
      padding: 10px;
      border: 1px solid;
      border-radius: 5px;
      overflow-wrap: break-word;
    }
  }

  article {
    background-color: yellow;
    height: 75vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
