import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Country } from "../types";

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
    maxHeight: 440,
  },
}));

const TablePage = ({ countries }: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const itemState = useSelector((state: AppState) => state.cartReducer.cart);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                {columnHeader.map((header) => (
                  <TableCell align="center" style={{ minWidth: 170 }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {countries &&
                countries
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((country: Country[] | Country | any) => (
                    <TableRow key={country.name}>
                      <TableCell align="center">
                        <img
                          src={country.flag}
                          alt={country.flag}
                          style={{ width: "150px" }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Link
                          to={`/${country.name}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          {country.name}
                        </Link>
                      </TableCell>

                      <TableCell align="center">{country.population}</TableCell>
                      <TableCell align="center">{country.region}</TableCell>

                      <TableCell align="center">
                        {itemState.find(
                          (item: any) => item.name === country.name
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
