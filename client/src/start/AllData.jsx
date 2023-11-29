import React, { useState, useEffect } from "react";
import axios from "axios";
import Template from "./template";

const AllData = () => {
  const [data, setData] = useState([]);
  const [updated, setUpdated] = useState(false);

  const updateData = () => {
    setUpdated(!updated);
  }

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/getexe`,{
            method: "GET"
          })
          const data = await response.json()
          console.log(data)
          setData(data)
        } catch (error) {
          console.error("error fetching repo", error);
        }
    }
    fetchData()
  }, [updated]);
  return (
    <div>
      {data.map(item => (
        <Template key={item._id} data={item} updateData={updateData}/>
      ))}
    </div>
  );
};

export default AllData;
