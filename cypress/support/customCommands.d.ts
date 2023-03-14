declare namespace Cypress {
    interface Chainable<Subject> {
        fill_contact_form_without_send(name: any, email: any, phone: any, description: any, terms: any): Chainable<any>
        fill_contact_form(name: any, email: any, phone: any, description: any, terms: any): Chainable<any>
        check_successfully_message(): Chainable<any>
        check_if_field_is_correctly_filled(field: any, message: any): Chainable<any>
  }
}