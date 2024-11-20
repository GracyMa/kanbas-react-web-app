import React, { useEffect, useState } from "react";
import * as client from "./client"; // Import the client library

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  // Function to fetch data on click
  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };

  // Function to fetch data on load
  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };

  // useEffect to call fetchWelcomeOnLoad when the component mounts
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h3>HTTP Client</h3>
      <hr />
      <h4>Requesting on Click</h4>
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button>
      <br />
      Response from server: <b>{welcomeOnClick}</b>
      <hr />
      <h4>Requesting on Load</h4>
      Response from server: <b>{welcomeOnLoad}</b>
      <hr />
    </div>
  );
}
