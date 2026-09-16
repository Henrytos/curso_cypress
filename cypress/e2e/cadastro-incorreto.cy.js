describe("Cadastro de Usuário incorreto", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");

    cy.contains("a", "Cadastrar").click();
  });

  it("não deve cadastrar um novo usuário, deve mostrar mensagem de erro", () => {
    cy.get('[data-test="submit-button"]').click();

    cy.contains("É necessário informar um endereço de email").should(
      "be.visible",
    );
    cy.contains("Crie uma senha").should("be.visible");
    cy.contains("Repita a senha criada acima").should("be.visible");
  });
});
