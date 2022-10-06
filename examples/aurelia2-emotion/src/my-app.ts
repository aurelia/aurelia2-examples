import { css, cx } from "@emotion/css";

export class MyApp {
    public cssStyles = {
      padding: '32px',
      backgroundColor: 'hotpink',
      fontSize: '24px',
      borderRadius: '4px',
      '&:hover': {
        color: '#FFF'
      }
    };

    public cssStyles2 = css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: #FFF;
      }
    `;

  }