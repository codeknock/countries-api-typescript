import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import ThemeDashboard from "../ThemeDashboard";
import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Badge, Button, Drawer } from "@material-ui/core";

import CartItems from "./CartItems";
import { AppState } from "../Redux/Reducers/rootReducer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",

      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);




const Appbar = ({ search, onChange }: any) => {
  const classes = useStyles();
  const[cart, setCart] = useState(false)
  const itemState = useSelector((state: AppState) => state.cartReducer.cart )


  return (
    <>
      <div className={classes.root}>
        <ThemeDashboard>
          <AppBar position="static" >
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                <Link to = "/" style={{textDecoration: 'none'}}>Rest Countries</Link>
              </Typography>
              
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>

                <InputBase
                  onChange={onChange}
                  value={search}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
                
              </div> 
              <Drawer anchor="right" open={cart} onClose={() => setCart(false)}>
              <CartItems />
              </Drawer>
              
              <Button onClick={() => setCart(true)}>
                <Badge badgeContent = {itemState.length} color='secondary'>
                <ShoppingBasketIcon>Cart</ShoppingBasketIcon>
                </Badge>
                </Button>
                
            </Toolbar>
          </AppBar>
        </ThemeDashboard>
      </div>
    </>
  );
};

export default Appbar;


