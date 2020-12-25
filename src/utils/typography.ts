import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.4,
  headerWeight: 700,
  headerGray: 10,
  bodyWeight: 400,
  boldWeight: 700,
  bodyGray: 20,
  scaleRatio: 2,
  headerFontFamily: [
    'Quicksand',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Open Sans', 'Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Quicksand',
      styles: ['700'],
      display: 'swap',
    },
    {
      name: 'Noto Sans',
      styles: ['400', '400i', '700', '700i'],
      display: 'swap',
    },
  ],
});
export default typography;
