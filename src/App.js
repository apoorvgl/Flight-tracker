import "./App.css";
//const axios = require("axios");
import axios from "axios";
import Map from "./Map";
import { useEffect, useState } from "react";

function App() {
  const [pos, setPos] = useState([]);
  const [flag, setFlag] = useState(false);
  const [lat, setLat] = useState("13.607884");
  const [lng, setLng] = useState("100.641975");

  useEffect(() => {
    getLocation();
  }, [lat, lng]);

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
    params: {
      bl_lat: "13.607884",
      bl_lng: "100.641975",
      tr_lat: "13.771029",
      tr_lng: "100.861566",
      limit: "300",
    },
    headers: {
      "X-RapidAPI-Key": "3cf3f95c34msh3085c15b357beabp1bd99djsnbf672744bf8c",
      "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
    },
  };

  const getLocation = async () => {
    const result = await axios.request(options);
    setPos(result);
    setFlag(true);
  };

  setInterval(() => {
    setLat(Number(lat) + 10)
    setLng(Number(lng) + 10);
  }, 30000);

  return (
    <div className="App">
      {flag && <Map pos={pos} />}
    </div>
  );
}

export default App;
