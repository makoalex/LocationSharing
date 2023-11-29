const afterLoading = () => cy.visit("/");
describe("HomePage", () => {
  beforeEach(() => {
    afterLoading();
    cy.wait(1000);
  });
  it("should load page", () => afterLoading());
  it("should have a title", () => {
    cy.contains('[data-testid="logo"]', "SnapMap").should("exist");
  });
  it("should have an input field", () => {
    cy.get('[data-testid="input"]').should("exist");
  });
  it("should have a button", () => {
    cy.get('[data-testid="button"]').should("exist");
  });
});
