// Provide a hook to setup login before running the monkey
module.exports = function(cy) {
  cy.visit('/ghost').then((win) => {
    const email = 'head@less.com'
    const password = 'oi_*&sKlj_+1!this'
    let doc = win.document;
    cy.get('h1').contains('Sign in').then(() => {
      cy.get('input[name="identification"]').type(email)
      cy.get('input[name="password"]').type(password)
      cy.get('button').contains('Sign in').click()
    });
    // cy.get('#blog-title', { timeout: 4000 }).type('Headless Blog');
    // cy.get('#name', { timeout: 4000 }).type('Headless Admin');
    // cy.get('#email', { timeout: 4000 }).type(email)
    // cy.get('#password', { timeout: 4000 }).type(password).then(() => {
    //   cy.get('button', { timeout: 4000 }).click()
    // });
    return;
  })
}
