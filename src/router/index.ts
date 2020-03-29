import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/product/:id",
    name: "product",
    component: Product
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
