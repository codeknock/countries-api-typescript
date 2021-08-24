

import "./App.css";
import useCountry from "./custom-hooks/useCountry";

interface Country {
  name: string,
}

function App() {
  const [countries, error] = useCountry();

  if(!countries)
  return <p>loading....</p>
  return (
    <div>
      {countries.map((country: Country) => (
        <div key={country.name}>
          <li>{country.name}</li>
        </div>
        
      ))}
    </div>
  );
}

export default App;
