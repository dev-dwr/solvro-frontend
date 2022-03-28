import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    btn: {
      marginTop: "20px"
    }
  }));