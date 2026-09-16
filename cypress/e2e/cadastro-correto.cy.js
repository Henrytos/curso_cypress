
describe("Cadastro de Usuário", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");

    cy.contains("a", "Cadastrar").click();
  });

  it("deve cadastrar um novo usuário com sucesso", () => {
    const email = `joao${Math.floor(Math.random() * 10000)}@gmail.com`;

    // preencher o formulário
    cy.get('[data-test="input-name"]').type("João");
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type("Joao2006@2026");
    cy.get('[data-test="input-confirm-password"]').type("Joao2006@2026");

    cy.get('[data-test="submit-button"]').click();
  });
});
