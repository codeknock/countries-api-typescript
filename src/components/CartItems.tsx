import {
  Button,
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/Actions";

import { AppState } from "../Redux/Reducers/rootReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      width: "100%",
      marginTop: 70,
    },
    sideBar: {
      width: "300px",
      textAlign: "center",
    },
  })
);

const CartItems = () => {
  const itemState = useSelector((state: AppState) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Grid container className={classes.sideBar} justifyContent="center">
      <Typography
        variant="h4"
        component="h4"
        style={{ textAlign: "center", display: "inline-block" }}
      >
        {itemState.length === 0 && <p>no items in cart</p>}
      </Typography>
      {itemState.map((item: any, index: any) => (
        <Card className={classes.root} key={index}>
          <CardContent>
            <img src={item.flags.svg} style={{ width: "70px" }} alt="flags" />
            <Typography variant="h5" color="textSecondary">
              {item.name.common}
            </Typography>
            <br></br>
            <Button
              variant="contained"
              onClick={() => dispatch(removeFromCart(item))}
              color="secondary"
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default CartItems;
