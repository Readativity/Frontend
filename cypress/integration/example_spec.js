describe("Readativity", function() {
  const randomNum = Math.floor(Math.random() * 1000);
  it("Should have two buttons on main page", function() {
    cy.visit("localhost:3000");
    cy.get("main > div").should("have.length.of", 2);
  });
  it("Create Account button should take you to /createaccount", function() {
    cy.get("#new-user-button").click();
    cy.url().should("include", "createaccount");
  });
  it("Create Account page has seven inputs", function() {
    cy.get("#CreateAccount input").should("have.length.of", 15);
  });
  it("Create Account works", function() {
    cy
      .get("#CreateAccount input")
      .eq(0)
      .type(`${randomNum}`);
    cy
      .get("#CreateAccount input")
      .eq(1)
      .type("testpassword");
    cy
      .get("#CreateAccount input")
      .eq(2)
      .type("testpassword");
    cy
      .get("#CreateAccount input")
      .eq(3)
      .type("test name");
    cy
      .get("#CreateAccount input")
      .eq(4)
      .type("testemail@testemail.com");
    cy
      .get("#CreateAccount input")
      .eq(5)
      .click();
    cy
      .get("#CreateAccount input")
      .eq(6)
      .click();
    cy
      .get("#CreateAccount input")
      .eq(7)
      .click();
    cy
      .get("#CreateAccount > input")
      .eq(0)
      .click();
    cy.get("main > div > p").not(".hidden");
  });
  it("Can log in to account just created", function() {
    cy
      .get("#footer a")
      .eq(0)
      .click({ force: true });
    cy.get("#login-button > p").click();
    cy
      .get(".ReactModalPortal form input")
      .eq(0)
      .type(`${randomNum}`);
    cy
      .get(".ReactModalPortal form input")
      .eq(1)
      .type("testpassword");
    cy
      .get(".ReactModalPortal form input")
      .eq(2)
      .click();
    cy
      .get(".ReactModalPortal a")
      .eq(0)
      .click();
    cy.get("main > a").should("have.length.of", 2);
  });
});
