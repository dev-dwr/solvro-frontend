import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    title: {
      marginTop: "10px",
      padding: theme.spacing(2),
      marginBottom: "10px"
    },
    card:{
      marginTop: "10px",
      "&:hover":{
        cursor: "pointer"
      }
    },
  }));