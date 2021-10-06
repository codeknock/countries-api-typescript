
import { Card, CardContent, createStyles, Grid, makeStyles, Theme, Button } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import useCountry from "../custom-hooks/useCountry";
import { useHistory, useParams } from "react-router-dom";
import { Country } from "../types";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 345,
      textAlign: "center",
      width: "30%",
      marginTop: 90,
    },
    button: {
      marginTop: "20",
      marginLeft: "250",
    }
  })
);



type Params = {
  countryName: string;
};

const SingleCountryPage = () => {
  const classes = useStyles();
  const { countryName } = useParams<Params>();
  const countryData = useCountry();
  const history = useHistory();

  const details = (countryData as Country[] | Country | any).find(
    (country: { name: { common: string } }) =>
      country.name.common === countryName
  );
  
  if (countryData.length === 0) return <p>loading...</p>;
  return (
    <>
      {countryData.length !== 0 && details && (
        
          <Grid container justifyContent="center">
            <Card className={classes.root}>
              <img src={details.flags.svg} alt="flag" style={{ width: "250px" }} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="span">
                  Name: {details.name.common}
                </Typography>
              </CardContent>
              <Typography variant="body2" color="textSecondary" component="span">Region: {details.region}</Typography>
              
              
              <Typography variant="body2" color="textSecondary" component="span">
                Borders: {details.borders && details.borders.join(",")}
                         {!details.borders && <p>No borders</p>}
              </Typography>
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
