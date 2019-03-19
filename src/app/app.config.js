routing.$inject = ["$urlRouterProvider", "$locationProvider", "$stateProvider"];

export default function routing(
  $urlRouterProvider,
  $locationProvider,
  $stateProvider
) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("about", {
      url: "/about",
      template: require("../features/about/about.html"),
      controller: "AboutController",
      controllerAs: "$ctrl"
    })
    .state("home", {
      url: "/",
      template: require("../features/home/home.html"),
      controller: "HomeController",
      controllerAs: "$ctrl"
    })
    .state("heroList", {
      url: "/heroList",
      template: require("../features/heroList/heroList.html"),
      controller: "HeroListController",
      controllerAs: "$ctrl"
    });
}
