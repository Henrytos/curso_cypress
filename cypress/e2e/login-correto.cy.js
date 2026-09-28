describe("Login de Usuário correto", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");

    cy.get('[data-test="login-button"]').click();
  });

  it("deve fazer login com sucesso", () => {
    cy.login(`joao6756@gmail.com`, `Joao2006@2026`);
  });
});
