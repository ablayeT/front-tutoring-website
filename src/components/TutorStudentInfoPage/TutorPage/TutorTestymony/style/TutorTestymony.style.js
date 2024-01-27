import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;
// const scaleInCenter = Keyframes`
//  0% {
//     -webkit-transform: scale(0);
//             transform: scale(0);
//     opacity: 1;
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//     opacity: 1;
//   }'
//   `;

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      maxWidth: '800px',
      display: 'flex',
      margin: 'auto',
      borderRadius: '10px',
      gap: '15px',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column-reverse',
        gap: '0px',
      },
    },
    textBox: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '10px',

      background: 'rgba(255, 165, 0, 0.2)',
    },
    imgBox: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    },
    button: {
      background: 'orange',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '40px',
      width: '180px',
      margin: 'auto',
      borderRadius: '10px',
    },
  };
});
