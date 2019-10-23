import React from "react";
import SnackFilter from "../../../SnackFilter/SnackFilter";
import SearchComponent from "./SearchComponent";
import SnackCard from "./SnackCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  
}));

const ViewAllSnacks = () => {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <SnackFilter />
        </Grid>
        <Grid item sm={9}>
          <SearchComponent />
          <br/>
          <Grid container spacing={1}>
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewAllSnacks;
