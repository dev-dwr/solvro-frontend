import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";


const Navbar = () => {
  const classes = useStyles();


  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.appBar}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h6"
          align="center"
        >
          News about Space Flights
        </Typography>
      </div>
    </AppBar>
  );
};


export default Navbar;