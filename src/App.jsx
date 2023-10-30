import "./App.css";
import axios from "axios";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [staticmap, setImg] = useState("");
  function handleChange(event) {
    setSearch(event.target.value);
  }


  https://maps.locationiq.com/v1/staticmap?key=<YOUR_ACCESS_TOKEN>&center=40.7128,-74.0060&zoom=16&size=600x400&format=png&maptype=roadmap

  async function getLocation(event) {
    event.preventDefault();

    // the API url we are going to make a request to
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;

    // make the GET request
    const res = await axios.get(API);

    // set location to be our response
    console.log(res.data[0]);
    setLocation(res.data[0]);
    setLat(res.data[0].lat);
    setLon(res.data[0].lon);
    setImg(res.data[0].staticmap);
  }

  return (
    <>
      <h1>APIs</h1>
      <form onSubmit={getLocation}>
        <input onChange={handleChange} placeholder="Location" />
        <button>Explore!</button>
      </form>

      <h3>Location: {location.display_name}</h3>
      <h3>Latitude: {lat}</h3>
      <h3>Longitude: {lon}</h3>
      <h2>Static Map {staticmap}</h2>

      {/* information about the location saved in state */}
    </>
  );
}

export default App;
