import "./main.css";
import { Elm } from "./Main.elm";
import * as serviceWorker from "./serviceWorker";

const app = Elm.Main.init({
  node: document.getElementById("root"),
  flags: {
    storedToken: localStorage.getItem("__DISTINCTLY_AVERAGE__"),
  },
});

app.ports.sendTokenToStorage.subscribe(function (token) {
  localStorage.setItem("__DISTINCTLY_AVERAGE__", token);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
