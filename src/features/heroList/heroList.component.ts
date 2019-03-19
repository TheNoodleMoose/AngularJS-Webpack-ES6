import angular from "angular";
import uirouter from "angular-ui-router";

// import HomeController from "./home.controller";
import randomNames from "../../services/randomNames.service";
import greeting from "../../directives/greeting.directive";

function HeroListController() {
  // This would be loaded by $http etc.
  this.list = [
    {
      name: "Superman",
      location: ""
    },
    {
      name: "Batman",
      location: "Wayne Manor"
    }
  ];

  this.updateHero = function() {
    console.log("Hi");
  };

  this.deleteHero = function(hero) {
    var idx = this.list.indexOf(hero);
    if (idx >= 0) {
      this.list.splice(idx, 1);
    }
  };
}

const heroList = {
  templateUrl: "./herolist.html",
  controller: HeroListController
};

export default angular
  .module("app.heroList", [uirouter, randomNames, greeting])
  .component("heroList", heroList)
  .controller("HeroListController", HeroListController).name;
