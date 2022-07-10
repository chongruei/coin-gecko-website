describe("Exchange Detail Page", () => {
  it("should visit index correctly", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/exchange/binance");
  });

  it("should render exchange correctly", () => {
    cy.getByTestId("exchange-name-binance").contains("Binance");
  });

  it("should render exchange year correctly", () => {
    // year 2017
    cy.getByTestId("exchange-year-established").contains("2017");
  });

  it("should back to index page correctly", () => {
    // to index page
    cy.getByTestId("backto-index").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});

export {};
