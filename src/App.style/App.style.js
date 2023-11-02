import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles((theme) => {
  return {
    App: {
      backgroundColor: 'orange',
    },
    index: {
      border: '1px solid red',
    },
  };
});
