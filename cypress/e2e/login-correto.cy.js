describe("Login de Usuário correto", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");

    cy.get('[data-test="login-button"]').click();
  });

  it("deve fazer login com sucesso", () => {
    cy.get('[data-test="input-loginEmail"]').type("joao6756@gmail.com");
    cy.get('[data-test="input-loginPassword"]').type("Joao2006@2026");
    cy.get('[data-test="submit-button"]').click();
  });
});
