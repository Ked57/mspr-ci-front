import store from "@/store/index";
import { ACTIONS } from "@/store/actions-definition";
import { isProduct, isUser } from "@/types";

describe("store", () => {
  it("action gets and sets products", async () => {
    await store.dispatch(ACTIONS.SET_PRODUCTS);
    expect(store.state.products.every(p => isProduct(p) && p.vat));
  });
  it("action gets and sets user when already exists", async () => {
    await store.dispatch(ACTIONS.SET_USER, "user@example.com");
    expect(
      isUser(store.state.user) &&
        store.state.user.auth_id === "user@example.com"
    );
  });
  it("action gets and sets user when doesn't exists", async () => {
    await store.dispatch(ACTIONS.SET_USER, "user2@example.com");
    expect(
      isUser(store.state.user) &&
        store.state.user.auth_id === "user2@example.com"
    );
  });
  it("action adds product to cart", () => {
    store.dispatch(ACTIONS.ADD_PRODUCT_TO_CART, {
      id: "qskfqksfnqgnqnkgqsre",
      name: "Peace Lily",
      price: 30,
      description: "A nice plant",
      category: "Indoor Plant",
      color: "red",
      vatType: "normal",
      logoUrl:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
    });
    expect(
      store.state.cart &&
        store.state.cart.products.length > 0 &&
        store.state.cart.products.find(
          p => p.product.id === "qskfqksfnqgnqnkgqsre"
        )?.quantity === 1 &&
        store.state.cart.products.every(p => isProduct(p.product))
    );
  });
  it("action removes product from cart", () => {
    store.dispatch(ACTIONS.ADD_PRODUCT_TO_CART, {
      id: "qosfqognqjnunegbgdshgbhdg",
      name: "Hand Sanitizer",
      price: 3000,
      description: "Rare remaining of hand sanitizer",
      category: "Healthcare",
      color: "blue",
      vatType: "intermediary",
      logoUrl:
        "https://mspr-ci-products.s3.fr-par.scw.cloud/person-holding-hand-sanitizer-3962331-removebg-preview.png"
    });
    store.dispatch(ACTIONS.REMOVE_PRODUCT_FROM_CART, {
      id: "qosfqognqjnunegbgdshgbhdg",
      name: "Hand Sanitizer",
      price: 3000,
      description: "Rare remaining of hand sanitizer",
      category: "Healthcare",
      color: "blue",
      vatType: "intermediary",
      logoUrl:
        "https://mspr-ci-products.s3.fr-par.scw.cloud/person-holding-hand-sanitizer-3962331-removebg-preview.png"
    });
    expect(
      store.state.cart &&
        store.state.cart.products.length <= 0 &&
        !store.state.cart.products.find(
          p => p.product.id === "qosfqognqjnunegbgdshgbhdg"
        )
    );
  });
});
