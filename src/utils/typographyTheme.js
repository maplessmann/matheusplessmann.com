const theme = {
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    'Open Sans',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  modularScales: [
    {
      scale: 2.25,
    },
    {
      scale: 'octave',
      maxWidth: '768px',
    },
  ],
  headerGray: 20,
  bodyGray: 20,
  headerWeight: 700,
  bodyWeight: 'normal',
  boldWeight: 'bold',
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      ...scale(1.3),
    },
    'h2, h3, h4, h5, h6': {
      marginTop: '3.5rem',
    },
    blockquote: {
      ...scale(1 / 5),
      color: 'rgba(0,0,0,0.6)',
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid rgba(0,0,0,.9)`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
  }),
}

export default theme
