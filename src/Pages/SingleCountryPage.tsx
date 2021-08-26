import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useCountry from "../custom-hooks/useCountry";
import { useHistory, useParams } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { Country } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      textAlign: "center",
      width: "30%",
      marginTop: 70,
    },
  })
);

type Params = {
  countryName: string;
  name: string;
};

const SingleCountryPage = () => {
  const classes = useStyles();

  const { countryName } = useParams<Params>();
  const [countries] = useCountry();
  const history = useHistory();

  const details = countries?.find(
    (country: any | Country[]) =>
      country.name.toLowerCase() === countryName.toLowerCase()
  );

  return (
    <>
      {details && (
        <Grid container justifyContent="center">
          <Card className={classes.root}>
            <img src={details.flag} alt="flag" style={{ width: "150px" }} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Name: {details.name}
              </Typography>
            </CardContent>
            <Typography paragraph>Region: {details.region}</Typography>
            <Typography paragraph>Population: {details.population}</Typography>
            <Typography paragraph>
              Languages:{" "}
              {details.languages
                .map((lang: { name: string }) => lang.name)
                .join(",")}
            </Typography>
            <Typography>Borders: {details.borders.join(",")}</Typography>{" "}
            <br></br>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => history.push("/")}
            >
              Back
            </Button>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default SingleCountryPage;
