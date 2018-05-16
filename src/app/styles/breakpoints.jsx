import { css } from 'styled-components';

const sizes = {
    tablet: 767,
    laptop: 969,
    desktop: 1279,
    desktopLarge: 1365,
    desktopXLarge: 1419,
}

const Breakpoint = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
        @media (min-width: ${emSize}em) {
            ${css(...args)}
        }
    `
    return accumulator

}, {});

export { Breakpoint };