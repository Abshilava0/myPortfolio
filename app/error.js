"use client";

import { useEffect } from "react";
import classes from "./error.module.css";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("error occured:", error);
  }, [error]);

  return (
    <div className={classes.error}>
      <h1>Something Went Wrong</h1>
      <p>Please Visit My Portfolio Later</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
