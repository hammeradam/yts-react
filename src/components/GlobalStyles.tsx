import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
    background: ${({ theme }) => theme.backgroundColor};
        
    }

  #root {
    margin: 0;
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    padding: 70px 0;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  // Icons
  /* Close */
  .gg-close-r {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs, 1));
        width: 22px;
        height: 22px;
        border: 2px solid;
        border-radius: 4px;
      }

      .gg-close-r::after,
      .gg-close-r::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 12px;
        height: 2px;
        background: currentColor;
        transform: rotate(45deg);
        border-radius: 5px;
        top: 8px;
        left: 3px;
      }

      .gg-close-r::after {
        transform: rotate(-45deg);
      }

      /* Download */
      .gg-software-download {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs, 1));
        width: 16px;
        height: 6px;
        border: 2px solid;
        border-top: 0;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        margin-top: 8px;
      }
      .gg-software-download::after {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 8px;
        height: 8px;
        border-left: 2px solid;
        border-bottom: 2px solid;
        transform: rotate(-45deg);
        left: 2px;
        bottom: 4px;
      }
      .gg-software-download::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        border-radius: 3px;
        width: 2px;
        height: 10px;
        background: currentColor;
        left: 5px;
        bottom: 5px;
      }

      /* Info */
      .gg-info {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs, 1));
        width: 20px;
        height: 20px;
        border: 2px solid;
        border-radius: 40px;
      }
      .gg-info::after,
      .gg-info::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        border-radius: 3px;
        width: 2px;
        background: currentColor;
        left: 7px;
      }
      .gg-info::after {
        bottom: 2px;
        height: 8px;
      }
      .gg-info::before {
        height: 2px;
        top: 2px;
      }

      .gg-bookmark,
    .gg-bookmark::after {
        display: block;
        box-sizing: border-box;
        border-top-right-radius: 3px
    }
    .gg-bookmark {
        border: 2px solid;
        border-bottom: 0;
        border-top-left-radius: 3px;
        overflow: hidden;
        position: relative;
        transform: scale(var(--ggs,1));
        width: 14px;
        height: 16px;

        &.active {
            background-color: currentColor;

            &::after {
                background-color: ${({ theme }) => theme.backgroundColor};
            }
        }
    }
    .gg-bookmark::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border-top: 2px solid;
        border-right: 2px solid;
        transform: rotate(-45deg);
        top: 9px;
        left: -1px;
        /* transition: .3s ease; */
    }

    .gg-heart,
.gg-heart::after {
    border: 2px solid;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    width: 10px;
    height: 8px;
    border-bottom: 0
}
.gg-heart {
    box-sizing: border-box;
    position: relative;
    transform:
        translate(
            calc(-10px / 2 * var(--ggs,1)),
            calc(-6px / 2 * var(--ggs,1))
        )
        rotate(-45deg)
        scale(var(--ggs,1));
    display: block
}
.gg-heart::after,
.gg-heart::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute
}
.gg-heart::after {
    right: -9px;
    transform: rotate(90deg);
    top: 5px
}
.gg-heart::before {
    width: 11px;
    height: 11px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    left: -2px;
    top: 3px
}x
`;
