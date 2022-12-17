import React from "react";
import { Router } from "@reach/router";
import Ekyc from "../ekyc";
import Default from "../index";
import FacialRecognition from "../facial-recognition";
import Ocr from "../ocr";
import ImageRecognition from "../image-recognition";
import PrivateRoute from "../PrivateRouter";
const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/facial-recognition" component={FacialRecognition} />
      <PrivateRoute path="/image-recognition" component={ImageRecognition} />
      <PrivateRoute path="/ekyc" component={Ekyc} />
      <PrivateRoute path="/ocr" component={Ocr} />
      <Default path="/" />
    </Router>
  );
};
export default App;
