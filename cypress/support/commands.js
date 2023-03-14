// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fill_contact_form_without_send', (name, email, phone, description, terms) => {
    name !== null && cy.get('input[name=nome]').type(name, { delay: 100 })
    email !== null && cy.get('input[name=email]').type(email, { delay: 100 })
    phone !== null && cy.get('input[name=phone]').type(phone, { delay: 100 })
    description !== null && cy.get('textarea[placeholder="Nos conte o seu desafio"]').type(description, { delay: 0 })
    terms !== false && cy.get('input[type="checkbox"]').check()
})

Cypress.Commands.add('fill_contact_form', (name, email, phone, description, terms) => {
    cy.fill_contact_form_without_send(name, email, phone, description, terms)
    cy.contains('Enviar').click()
})

Cypress.Commands.add('check_successfully_message', () => {
    cy.contains("Obrigado!").should('be.visible')
})

Cypress.Commands.add('check_if_field_is_correctly_filled', (field, message)=> {
    cy.contains('Enviar').click()
    field
    cy.get(`input[${field}]:invalid`).then(($input)=> {
        expect(message).to.include($input[0].validationMessage)
    })
})