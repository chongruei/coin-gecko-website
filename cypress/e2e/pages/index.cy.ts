describe("Index Page", () => {
  it("should render exchanes correctly", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    cy.getByTestId("exchange-rank").contains("Rank");
    cy.getByTestId("exchange-name").contains("Name");
    cy.getByTestId("exchange-country").contains("Country");

    // next page
    cy.getByTestId("next-page").click();

    // rank 11
    cy.getByTestId("rank-11").contains("11");

    // rank 12
    cy.getByTestId("rank-12").contains("12");

    // rank 13
    cy.getByTestId("rank-13").contains("13");

    // prev page
    cy.getByTestId("next-page").click();

    // rank 11
    cy.getByTestId("rank-1").contains("11");

    // rank 12
    cy.getByTestId("rank-2").contains("12");

    // rank 13
    cy.getByTestId("rank-3").contains("13");
  });
});

export {};
