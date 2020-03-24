export const mock: {
  [key: string]: {
    [key: string]: any;
  };
} = {
  "https://cart.louisperdereau.fr/products": {
    GET: [
      {
        id: 1,
        name: "Peace Lily",
        price: 30,
        description: "A nice plant",
        category: "Indoor Plant",
        color: "red",
        vatType: "normal",
        logoUrl:
          "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
      },
      {
        id: 2,
        name: "Hand Sanitizer",
        price: 3000,
        description: "Rare remaining of hand sanitizer",
        category: "Healthcare",
        color: "blue",
        vatType: "intermediary",
        logoUrl:
          "https://mspr-ci-products.s3.fr-par.scw.cloud/person-holding-hand-sanitizer-3962331-removebg-preview.png"
      },
      {
        id: 3,
        name: "Plate",
        price: 10,
        description: "A nice plate",
        category: "Kitchen",
        color: "orange",
        vatType: "normal",
        logoUrl:
          "https://mspr-ci-products.s3.fr-par.scw.cloud/flatlay-photography-of-white-ceramic-bowl-2611817-removebg-preview.png"
      }
    ]
  },
  "https://user.louisperdereau.fr/user/1": {
    GET: {
      auth_id: "1",
      user_name: "user@example.com"
    },
    PUT: {
      auth_id: "1",
      user_name: "user@example.com"
    }
  }
};
