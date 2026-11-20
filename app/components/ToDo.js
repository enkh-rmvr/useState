"use client";
import { useState } from "react";

export const ToDo = () => {
  const [SelectedCategory, SetSelectedCategory] = useState("ALL");
  const ChangeSelectedCategory = (newCategory) => {
    SetSelectedCategory(newCategory);
  };
  const [ToDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const AddJob = () => {
    if (inputValue.trim()) {
      const newJob = {
        id: Date.now(),
        title: inputValue,
        isDone: false,
      };
      setToDoList([...ToDoList, newJob]);
      setInputValue("");
    }
  };

  const deleteJob = (id) => {
    const updatedList = ToDoList.filter((job) => {
      return job.id !== id;
    });
    setToDoList(updatedList);
  };

  const changeJobStatus = (id, status) => {
    const result = ToDoList.map((ToDo) => {
      if (ToDo.id === id) {
        return { ...ToDo, isDone: status };
      } else {
        return ToDo;
      }
    });
    setToDoList(result);
  };

  const filteredList = ToDoList.filter((job) => {
    if (SelectedCategory === "DONE") return job.isDone === true;
    if (SelectedCategory === "INPROGRESS") return job.isDone === false;
    if (SelectedCategory === "ALL") return true;
  });

  return (
    <div
      className={
        "w-100 p-4 bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-5"
      }
    >
      <div className="text-center">
        <h1 className="text-black">To Do List</h1>
        <p className="text-black">{ToDoList.length} items</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <input
          className="text-black border-2 border-gray-300 w-75 rounded-md p-1"
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button
          className="text-black bg-blue-400 rounded-lg h-8 w-12"
          onClick={AddJob}
        >
          Add
        </button>
      </div>
      <div className="flex justify-evenly gap-2">
        <button
          onClick={() => {
            ChangeSelectedCategory("ALL");
          }}
          className={`text-black border-2 w-28 ${
            SelectedCategory === "ALL" ? "bg-blue-400" : "bg-gray-400"
          } border-gray-300 rounded-md p-1`}
        >
          All
        </button>
        <button
          onClick={() => {
            ChangeSelectedCategory("DONE");
          }}
          className={`text-black border-2 w-28 ${
            SelectedCategory === "DONE" ? "bg-blue-400" : "bg-gray-400"
          } border-gray-300 rounded-md p-1`}
        >
          Done
        </button>
        <button
          onClick={() => {
            ChangeSelectedCategory("INPROGRESS");
          }}
          className={`text-black border-2 w-28 ${
            SelectedCategory === "INPROGRESS" ? "bg-blue-400" : "bg-gray-400"
          } border-gray-300 rounded-md p-1`}
        >
          In Progress
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-black">
        {filteredList.map((job) => (
          <div key={job.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={job.isDone}
              onChange={(e) => changeJobStatus(job.id, e.target.checked)}
            />
            <p className="text-black bg-gray-200 w-70 rounded-xl p-2 h-10 flex items-center text-left">
              {job.title}
            </p>
            <button
              onClick={() => deleteJob(job.id)}
              className="text-white bg-red-500 rounded-lg px-2 py-1"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
