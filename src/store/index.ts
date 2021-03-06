import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { of } from "await-of";
import { State, Product, User, Vat } from "@/types";
import { MUTATIONS } from "./mutations-definition";
import { ACTIONS } from "./actions-definition";
import { mock } from "@/mock/mock";

const CART_API_URL = "https://cart.louisperdereau.fr";
const USER_API_URL = "https://user.louisperdereau.fr";
const BILLING_API_URL = "https://billing.louisperdereau.fr";

const useMock = process.env.NODE_ENV === "test";
const fetcher = useMock
  ? async (url: string, options?: RequestInit) => {
      const method = options?.method || "";
      return mock[url][method];
    }
  : async (url: string, options?: RequestInit) => {
      const result = await fetch(url, options);
      if (!result.ok) {
        Promise.reject({ status: result.status, message: result.statusText });
      }
      return await result.json();
    };
const vuexLocal = new VuexPersistence<State>({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: {
    products: []
  },
  mutations: {
    [MUTATIONS.SET_PRODUCTS]: (state, payload: Product[]) => {
      state.products = payload;
    },
    [MUTATIONS.SET_USER]: (state, payload: User) => {
      state.user = payload;
    },
    [MUTATIONS.ADD_PRODUCT_TO_CART]: (state, payload: Product) => {
      const existingProduct = state.cart?.products.find(
        p => p.product.id === payload.id
      );
      const product = existingProduct
        ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
        : {
            product: payload,
            quantity: 1,
            index: (state.cart?.products.length || -1) + 1
          };
      state.cart = !state.cart
        ? { products: [], createdAt: new Date() }
        : state.cart;
      state.cart.products = [
        ...state.cart?.products.filter(
          p => p.product.id !== product.product.id
        ),
        product
      ];
      // .sort((a, b) => a.index - b.index);
    },
    [MUTATIONS.SUBSTRACT_PRODUCT_FROM_CART]: (state, payload: Product) => {
      const existingProduct = state.cart?.products.find(
        p => p.product.id === payload.id
      );
      const product = existingProduct
        ? { ...existingProduct, quantity: existingProduct.quantity - 1 }
        : undefined;
      if (!product) {
        return;
      }
      state.cart = !state.cart
        ? { products: [], createdAt: new Date() }
        : state.cart;
      state.cart.products = [
        ...state.cart?.products.filter(
          p => p.product.id !== product.product.id
        ),
        product
      ];
    },
    [MUTATIONS.REMOVE_PRODUCT_FROM_CART]: (state, payload: Product) => {
      if (!state.cart) {
        return;
      }
      state.cart.products = state.cart.products
        .filter(p => p.product.id !== payload.id)
        .map((p, index) => ({ ...p, index }));
    }
  },
  actions: {
    [ACTIONS.SET_PRODUCTS]: async context => {
      const [products, err] = await of(
        fetcher(`${CART_API_URL}/products`, { method: "GET" })
      );
      if (err) {
        console.error(err);
        return;
      }
      const productColors = ["red", "blue", "orange"];
      context.commit(
        MUTATIONS.SET_PRODUCTS,
        products.map((p: Product) => ({
          ...p,
          color: productColors[Math.floor(Math.random() * 3)]
        }))
      );
      const vatProducts = await Promise.all(
        context.state.products.map(async product => {
          const [vat, err] = await of(
            fetcher(`${BILLING_API_URL}/api/product/${product.id}/vat`, {
              method: "GET"
            })
          );
          if (err) {
            console.error(err);
            return;
          }
          return {
            ...product,
            vat
          };
        })
      );
      context.commit(MUTATIONS.SET_PRODUCTS, vatProducts);
    },
    [ACTIONS.SET_USER]: async (context, payload) => {
      if (!payload) {
        console.error({ message: "Invalid input" });
        return;
      }
      const [user, err] = await of(
        fetcher(`${USER_API_URL}/user/${payload}`, { method: "GET" })
      );
      if (!user) {
        const [createdUser, err] = await of(
          fetcher(`${USER_API_URL}/user`, {
            method: "PUT",
            body: JSON.stringify({
              auth_id: payload,
              user_name: payload.split("@")[0]
            })
          })
        );
        if (err) {
          console.error(err);
          return;
        }
        context.commit(MUTATIONS.SET_USER, createdUser);
        return;
      }
      context.commit(MUTATIONS.SET_USER, user);
    },
    [ACTIONS.ADD_PRODUCT_TO_CART]: (context, payload: Product) => {
      context.commit(MUTATIONS.ADD_PRODUCT_TO_CART, payload);
    },
    [ACTIONS.SUBSTRACT_PRODUCT_FROM_CART]: (context, payload: Product) => {
      context.commit(MUTATIONS.SUBSTRACT_PRODUCT_FROM_CART, payload);
      const product = context.state.cart?.products.find(
        p => p.product.id === payload.id
      );
      if (product && product.quantity <= 0) {
        context.commit(MUTATIONS.REMOVE_PRODUCT_FROM_CART, payload);
      }
    },
    [ACTIONS.REMOVE_PRODUCT_FROM_CART]: (context, payload: Product) => {
      context.commit(MUTATIONS.REMOVE_PRODUCT_FROM_CART, payload);
    }
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
