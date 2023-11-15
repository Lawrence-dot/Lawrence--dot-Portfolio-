import React from "react";
import { ProjType } from "../Interfaces/types";

function Project(props: ProjType) {
  return (
    <div className="card w-100 sm:w-50 lg-w-25 mx-auto dark:bg-gray-900 dark:text-white rounded-md shadow-md bg-white toDo border-blue-100">
      <div className="cardImg">
        <img src={props.src} height={"40px"} alt="" />
      </div>
      <div className="cardContents p-3">
        <div className="cardTitle">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            {props.title}
          </h1>
        </div>
        <div className="flex my-2 lang dark:text-red-400 text-red-800 justify-center">
          <span className="mr-2"> {props.stack[0]}</span>
          <span className="mx-2"> {props.stack[1]}</span>
          <span className="mx-2"> {props.stack[2]}</span>
        </div>
        <div className="cardInfo">
          <p className="text-center">{props.description}</p>
        </div>
        <div className="cardBtn flex justify-center content-end">
          <a
            href={props.link}
            className="border pointer my-2 mx-auto rounded p-2 border-dark dark:border-white hover:dark:bg-dark hover:bg-light hover:text-white"
          >
            {" "}
            Live Demo{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
