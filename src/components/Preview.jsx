import React, { useState } from 'react';

// styles
import { PreviewSection } from '../styles/PreviewStyle';

function Preview() {
  const [message, setMessage] = useState('');

  return (
    <PreviewSection>
      <div className="preview">
        <textarea
          placeholder="직접 입력 해 보세요!"
          value={message}
          onChange={inputChange}
        />
        <p>{message}</p>
      </div>
      <article>feed 보여주는 영역</article>
    </PreviewSection>
  );

  function inputChange({ target }) {
    setMessage(target.value);
  }

  // function HideString() {
  // const reg = /\[([^\]]+)\]/gi;
  // const startIndex = message.lastIndexOf('[');
  // const endIndex = message.lastIndexOf(']');
  // const round = roundStr(startIndex, endIndex);
  // const front = frontStr(startIndex);
  // const end = endStr(endIndex);
  // return str;
  // let newStr = '';
  // newStr += front + round + end;
  // return newStr;
}

// function roundStr(start, end) {
//   const length = end - start - 1;
//   let round = '';

//   if (length > 0) {
//     for (let i = 0; i < length; i++) {
//       round += 'O';
//     }
//   }
//   return round;
// }

// function frontStr(start) {
//   if (start === -1) return '';

//   return message.slice(0, start);
// }

// function endStr(end) {
//   if (end === -1) return '';

//   return message.slice(end + 1, message.length);
// }
// }

export default Preview;
