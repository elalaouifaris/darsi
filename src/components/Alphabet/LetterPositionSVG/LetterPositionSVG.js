import React from 'react';

import style from './LetterPositionSVG.module.css';

// Generate random elemetn id
const guid = () => {
  const s4 = () => (Math
      .floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1));
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const letter_position_svg = ({ text, start, end }) => {
  const path_id = guid();

  const svg_width = 400;
  const svg_height = 300;
  const color_x_start = (100 - end) / 100 * svg_width;
  const color_width = (end - start) / 100 * svg_width;

  return (
    <svg  width={ svg_width }
          height={ svg_height }
          viewBox="0 0 400 300">
      <defs>
        <clipPath id={ path_id }>
           <text className={ style.Text }
            x={ svg_width / 2 }
            y={ svg_height * 0.7 }>
            { text }
          </text>
        </clipPath>
      </defs>

      <g clipPath={ "url(#" + path_id + ")"}>
        <rect className={ style.Filler }
              x="0" y="0" width={ svg_width } height={ svg_height }/>

        <rect className={ style.Color }
              x={ color_x_start }
              y="0"
              height={ svg_height }
              width={ color_width } />
      </g>
    </svg>
  );
}

export default letter_position_svg;
