import React from "react";
import { CircularProgress } from '@material-ui/core';

const Loading = () => (
  <div className="spinner">
    <CircularProgress />
    <h1>Welp this is loading</h1>
  </div>
);

export default Loading;