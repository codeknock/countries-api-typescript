import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
//import useCountry from "../custom-hooks/useCountry";
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
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>FLAG</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>POPULATION</TableCell>
              <TableCell>REGION</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries &&
              countries.map((country: Country[] | Country | any) => (
                <TableRow key={country.name}>
                  <TableCell>
                    <img
                      src={country.flag}
                      alt={country.flag}
                      style={{ width: "150px" }}
                    />
                  </TableCell>
                  <TableCell>{country.name}</TableCell>

                  <TableCell>{country.population}</TableCell>
                  <TableCell>{country.region}</TableCell>

                  <TableCell>
                    <Button variant="contained" color="primary">
                      Add
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
