/*jslint node: true */
'use strict';
const path = require('path');

const transparent = 'rgba(0, 0, 0, 0)';
const mainColor = '#171924';
const backgroundColor = '#282a36';
const foregroundColor = '#eff0eb';
const borderColor = '#222430';
const cursorColor = '#97979b';
const red = '#ff5c57';
const green = '#5af78e';
const yellow = '#f3f99d';
const blue = '#57c7ff';
const magenta = '#ff6ac1';
const cyan = '#9aedfe';
const white = '#f1f1f0';
const lightBlack = '#b9b9b9';
const selectionColor = 'rgba(151, 151, 155, 0.3)';

let imagePath = path.join(path.resolve(__dirname, 'backgrounds'), 'aliens.png');
imagePath = imagePath.replace(/\\/g, '/');

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    backgroundColor: transparent,
    foregroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor: backgroundColor,
    selectionColor,
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor,
    },
    css: `
    ${config.css || ''}

    /* Title background color */
    .hyper_main {
      background-color: ${mainColor};
    }

    /* Terminal background image */
    .terms_terms {
      background: url("file://${imagePath}") center;
      background-size: cover;
    }

		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}

    /* Title colors */
    .tab_tab {
			color: #ffffff !important;
		}

		/* Add a highlight line below the active tab */
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 2px;
			background-color: rgba(0, 120, 0, 0.6);
			transform: scaleX(0);
			will-change: transform;
		}
		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
		}

		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
	`,
  });
