import React, { useState, useEffect } from "react";
import axios from "axios";
import AddForm from "./AddForm";
import DisplayInformation from "./displayInformation";

const MainApp = () => {
  const [data, setData] = useState([]);

  const getTrackData = () => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/tracker/all`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTrackData();
  }, []);
  return (
    <div>
      <AddForm getTrackData={getTrackData} />
      <DisplayInformation data={data} />
    </div>
  );
};

export default MainApp;
