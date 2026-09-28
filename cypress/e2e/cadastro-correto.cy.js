describe("Cadastro de Usuário", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");

    cy.contains("a", "Cadastrar").click();
  });

  it("deve cadastrar um novo usuário com sucesso", () => {
    const email = `joao${Math.floor(Math.random() * 10000)}@gmail.com`;

    cy.register({
      name: "João",
      email: email,
      password: "Joao2006@2026",
    });
  });
});
