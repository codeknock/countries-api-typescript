import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Country } from "../types";

import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
    
  },
}));

const TablePage = ({ countries }: any) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          style={{ tableLayout: "fixed", whiteSpace: "nowrap" }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" >FLAG</TableCell>
              <TableCell align="center">NAME</TableCell>
              
              
              <TableCell align="center">POPULATION</TableCell>
              <TableCell align="center">REGION</TableCell>
              <TableCell align="center">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries &&
              countries.map((country: Country[] | Country | any) => (
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
                    <Button variant="contained" color="primary">
                      LIKE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TablePage;
