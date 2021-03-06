import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import BreweriesIndex from "../views/BreweriesIndex.vue";
import BreweriesShow from "../views/BreweriesShow.vue";

import ReviewsIndex from "../views/ReviewsIndex.vue";
import ReviewsNew from "../views/ReviewsNew.vue";
import ReviewsEdit from "../views/ReviewsEdit.vue";

import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/breweries", name: "BreweriesIndex", component: BreweriesIndex },
  { path: "/breweries/:id", name: "Breweries-show", component: BreweriesShow },
  { path: "/reviews", name: "ReviewsIndex", component: ReviewsIndex },
  { path: "/reviewsnew", name: "ReviewsNew", component: ReviewsNew },
  { path: "/reviews/:id/edit", name: "ReviewsEdit", component: ReviewsEdit },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/search", name: "search", component: Search },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
