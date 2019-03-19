import "bootstrap/dist/css/bootstrap.css";

import angular from "angular";
import uirouter from "angular-ui-router";

import routing from "./app.config";
import home from "../features/home/home.component.ts";
import about from "../features/about/about.component.ts";
import heroList from "../features/heroList/heroList.component.ts";

import "../style/app.css";

let app = () => {
  return {
    template: require("./app.html"),
    controller: "AppCtrl",
    controllerAs: "app"
  };
};

class AppCtrl {
  constructor() {
    this.url = "https://github.com/preboot/angular-webpack";
  }
}

export default angular
  .module("app", [uirouter, home, about, heroList])
  .config(routing)
  .directive("app", app)
  .controller("AppCtrl", AppCtrl);
