import { Container } from "@material-ui/core";
import React, { useState } from "react";
import Appbar from "../components/Appbar";
import TablePage from "../components/TablePage";
import useCountry from "../custom-hooks/useCountry";
import { Country } from "../types";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const countryData = useCountry();

  const filteredCountry = (countryData as Country[]).filter((country: any) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    //console.log(e.target.value);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Appbar search={search} onChange={handleChange} />
        <TablePage countries={filteredCountry} />
      </Container>
    </div>
  );
};

export default Homepage;
