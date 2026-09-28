describe("Login de Usuário incorreto", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");

    cy.get('[data-test="login-button"]').click();

    cy.intercept(
      `POST`,
      `https://adopet-api-i8qu.onrender.com/adotante/login`,
      {
        statusCode: 400,
      },
    ).as(`stubPost`);
  });

  it("deve mostrar mensagens de erro ao tentar fazer login sem preencher os campos", () => {
    cy.get('[data-test="submit-button"]').click();

    cy.contains("É necessário informar um endereço de email").should(
      "be.visible",
    );
    cy.contains("Insira sua senha").should("be.visible");
  });

  it(`deve mostrar mensagem de erro mesmo com login valido`, () => {
    cy.login(`joao6756@gmail.com`, `Joao2006@2026`);
    cy.wait(`@stubPost`);
    cy.contains(`Falha no login. Consulte suas credenciais.`).should(
      `be.visible`,
    );
  });
});
