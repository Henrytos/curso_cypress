describe("Login de Usuário incorreto", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");

    cy.get('[data-test="login-button"]').click();
  });

  it("deve mostrar mensagens de erro ao tentar fazer login sem preencher os campos", () => {
    cy.get('[data-test="submit-button"]').click();

    cy.contains("É necessário informar um endereço de email").should(
      "be.visible",
    );
    cy.contains("Insira sua senha").should("be.visible");
  });
});
