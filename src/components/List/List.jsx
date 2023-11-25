import React from "react";
import { useSelector } from "react-redux";

export default function Lists() {
  const { tasks = [] } = useSelector((state) => state.tasksReducer);
  return (
    <div className="listings-container">
      {tasks.map((d, index) => (
        <p key={index}>{d}</p>
      ))}
    </div>
  );
}