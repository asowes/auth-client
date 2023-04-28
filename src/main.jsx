import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "@asow/core/pages";
import "@asow/ui/dist/index.css";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./router/AppRouter";
import "./index.css";

// 鼠标左键点击效果
import "./render/mouseClick";
import "./render/mouseClick.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strict 在开发模式下会渲染两次 https://github.com/facebook/react/issues/17786
  // <React.StrictMode>
  <App Component={AppRouter} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
