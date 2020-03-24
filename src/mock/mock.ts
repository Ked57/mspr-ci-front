export const mock: {
  [key: string]: {
    [key: string]: any;
  };
} = {
  "https://cart.louisperdereau.fr/products": {
    GET: [
      {
        id: "qskfqksfnqgnqnkgqsre",
        name: "Peace Lily",
        price: 30,
        description: "A nice plant",
        category: "Indoor Plant",
        color: "red",
        logoUrl:
          "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
      },
      {
        id: "qosfqognqjnunegbgdshgbhdg",
        name: "Hand Sanitizer",
        price: 3000,
        description: "Rare remaining of hand sanitizer",
        category: "Healthcare",
        color: "blue",
        logoUrl:
          "https://mspr-ci-products.s3.fr-par.scw.cloud/person-holding-hand-sanitizer-3962331-removebg-preview.png"
      },
      {
        id: "qsgnjgnrjgnjlfdskfslei",
        name: "Plate",
        price: 10,
        description: "A nice plate",
        category: "Kitchen",
        color: "orange",
        logoUrl:
          "https://mspr-ci-products.s3.fr-par.scw.cloud/flatlay-photography-of-white-ceramic-bowl-2611817-removebg-preview.png"
      }
    ]
  },
  "https://user.louisperdereau.fr/user/user@example.com": {
    GET: {
      auth_id: "user@example.com",
      user_name: "user"
    }
  },
  "https://user.louisperdereau.fr/user": {
    PUT: {
      auth_id: "user@example.com",
      user_name: "user"
    }
  },
  "https://billing.louisperdereau.fr/api/product/qskfqksfnqgnqnkgqsre/vat": {
    GET: [
      {
        type: "normal",
        percent: 20
      }
    ]
  },
  "https://billing.louisperdereau.fr/api/product/qosfqognqjnunegbgdshgbhdg/vat": {
    GET: [
      {
        type: "intermediary",
        percent: 10
      }
    ]
  },
  "https://billing.louisperdereau.fr/api/product/qsgnjgnrjgnjlfdskfslei/vat": {
    GET: [
      {
        type: "reduce",
        percent: 5.5
      }
    ]
  }
};
