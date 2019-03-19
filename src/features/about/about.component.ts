import angular from "angular";
import uirouter from "angular-ui-router";

// import HomeController from "./home.controller";
import randomNames from "../../services/randomNames.service";
import greeting from "../../directives/greeting.directive";

function AboutController() {
  this.click = () => {
    console.log("Click");
  };
}

const about = {
  templateUrl: "./about.html",
  controller: "AboutController",
  controllerAs: "$ctrl"
};

AboutController.$inject = ["randomNames"];

export default angular
  .module("app.about", [uirouter, randomNames, greeting])
  .component("about", about)
  .controller("AboutController", AboutController).name;
