describe('cenário 02 - verity contact page testing', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('CONTATO').click()
        cy.fixture("contact.json").then(function (contact) {
            this.fContact = contact
        })
    })

    it('Preencher formulário de contato com sucesso', function () {
        const contact = this.fContact[0]

        cy.fill_contact_form(
            contact.name,
            contact.email,
            contact.phone,
            contact.description,
            contact.terms
        )
        cy.check_successfully_message()
    })

    it('Tentar preencher formulário de contato sem preencher o campo nome', function () {
        const contact = this.fContact[1]
        cy.fill_contact_form_without_send(
            contact.name,
            contact.email,
            contact.phone,
            contact.description,
            contact.terms
        )
        cy.check_if_field_is_correctly_filled('name=nome', "Preencha este campo.")
    })

    it('Tentar preencher formulário de contato sem preencher o campo email', function () {
        const contact = this.fContact[2]
        cy.fill_contact_form_without_send(
            contact.name,
            contact.email,
            contact.phone,
            contact.description,
            contact.terms
        )
        cy.check_if_field_is_correctly_filled('name=email', "Preencha este campo.")
    })

    it('Tentar preencher formulário de contato preenchendo o campo email com valor inválido', function () {
        const contact = this.fContact[3]
        cy.fill_contact_form_without_send(
            contact.name,
            contact.email,
            contact.phone,
            contact.description,
            contact.terms
        )
        cy.check_if_field_is_correctly_filled('name=email', "Insira um endereço de email válido.")
    })

    it('Tentar preencher formulário de contato sem preencher o campo telefone', function () {
        const contact = this.fContact[4]
        cy.fill_contact_form_without_send(
            contact.name,
            contact.email,
            contact.phone,
            contact.description,
            contact.terms
        )
        cy.check_if_field_is_correctly_filled('name=phone', "Preencha este campo.")
    })

    it('Tentar preencher formulário de contato sem clicar em <aceitar receber mensagem>', function () {
        const contact = this.fContact[5]
        cy.fill_contact_form_without_send(
            contact.name,
            contact.email,
            contact.phone,
            contact.description,
            contact.terms
        )
        cy.check_if_field_is_correctly_filled('type=checkbox', "Marque esta caixa se deseja continuar.")
    })
})
