import React, { useState } from "react";
import "./template.css"; 
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Template = ({ data, updateData }) => {
  const { _id, name, muscle, equipment, difficulty, instructions, img, done } = data;
  const [showInstructions, setShowInstructions] = useState(false);
  const [isDone, setIsDone] = useState(done);
  const [isLoading, setIsLoading] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const handleDelete = (id) => {
    setIsLoading(true);
    axios.delete(`http://localhost:8080/deleteexe/${id}`)
      .then((res) => {
        console.log(res.data);
        updateData();
      })
      .catch((err) => {
        console.error("Error deleting exercise:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onTick = (id) => {
    if (isDone) {
      alert("You have already completed this exercise!");
    } else {
      setIsLoading(true);
      axios.put(`http://localhost:8080/updateexe/${id}`)
        .then((res) => {
          console.log(res.data);
          setIsDone(true);
        })
        .catch((err) => {
          console.error("Error updating exercise:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Muscle: {muscle}</p>
        <p className="card-text">Equipment: {equipment}</p>
        <p className="card-text">Difficulty: {difficulty}</p>
        <p className="card-text">Done: {isDone && <FaCheckCircle />}</p>
        <h6 className="card-subtitle mb-2 text-muted" onClick={toggleInstructions}>{name}</h6>
        <img src={img} className="img-fluid mb-2" alt={name} />
        {showInstructions && (
          <div>
            <p className="card-text">Instructions: {instructions}</p>
          </div>
        )}
        <div className="button-container">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(_id)}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete Exercise"}
          </button>
          <button
            className="btn btn-success ml-2"
            onClick={() => onTick(_id)}
            disabled={isLoading || isDone}
          >
            {isLoading ? "Updating..." : "Tick Exercise"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template;
