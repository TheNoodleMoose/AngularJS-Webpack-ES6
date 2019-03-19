import angular from "angular";
import uirouter from "angular-ui-router";

// import HomeController from "./home.controller";
import randomNames from "../../services/randomNames.service";
import greeting from "../../directives/greeting.directive";

function HomeController(randomNames) {
  this.random = randomNames;
  this.name = "World";

  this.changeName = function() {
    this.name = "angular-tips";
  };

  this.randomName = function() {
    this.name = this.random.getName();
  };
}

const home = {
  templateUrl: "./home.html",
  controller: HomeController
};

HomeController.$inject = ["randomNames"];

export default angular
  .module("app.home", [uirouter, randomNames, greeting])
  .component("home", home)
  .controller("HomeController", HomeController).name;
