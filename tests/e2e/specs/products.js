// https://docs.cypress.io/api/introduction/api.html

const url = Cypress.env("FRONT_URL");
describe("Products", () => {
  it("Check if products exist", () => {
    cy.visit(`${url}/`);
    cy.get('a[href="/#/products"]').click();
    cy.get("div.items-center").children("div");
  });
  it("Click on products", () => {
    cy.visit(`${url}/`);
    cy.get('a[href="/#/products"]').click();
    cy.get("div.items-center")
      .children("div")
      .first()
      .click();
    cy.get("div.uppercase.text-center").contains("Peace Lily");
  });
  it("Add product in cart", () => {
    cy.visit(`${url}/`);
    cy.get('a[href="/#/products"]').click();
    cy.get("div.items-center")
      .children("div")
      .first()
      .click();
    cy.get("section")
      .find("a")
      .children("div")
      .click();
    cy.get("table").contains("td", "Peace Lily");
  });
});
