import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//import { Country } from "../types";

import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Button,
  TablePagination,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { addItemsToCart } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../Redux/Reducers/rootReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 1000,
  },
}));

const TablePage = ({ countries }: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const itemState = useSelector((state: AppState) => state.cartReducer.cart);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columnHeader = ["Flag", "Name", "Population", "Region", "Action"];

  const handleChangePage = (event: unknown, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table>
            <TableHead>
              <TableRow>
                {columnHeader.map((header, index) => (
                  <TableCell
                    align="center"
                    style={{ minWidth: 170 }}
                    key={index}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {countries
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((country: any, index: React.Key | null | undefined) => (
                  <TableRow key={index}>
                    <TableCell align="center">
                      <img
                        src={country.flags.svg}
                        alt="flag"
                        style={{ width: "150px" }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Link
                        to={`/${country.name.common}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {country.name.common}
                      </Link>
                    </TableCell>

                    <TableCell align="center">{country.population}</TableCell>
                    <TableCell align="center">{country.region}</TableCell>

                    <TableCell align="center">
                      {itemState.find(
                        (item: any) => item.name.common === country.name.common
                      ) ? (
                        <Button variant="contained" disabled>
                          LIKE
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => dispatch(addItemsToCart(country))}
                        >
                          LIKE
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={countries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default TablePage;
