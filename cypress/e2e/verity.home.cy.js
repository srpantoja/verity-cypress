describe('cenário 01 - verity home page testing', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Verificar se os títulos: Culture e Tech; e Nossas soluções_ estão visíveis na home page em português', () => {
    cy.contains('Nossas soluções_').should('be.visible')
    cy.get('section').contains('Culture e Tech').should('be.visible')
  })

  it('Verificar se os títulos: Culture and Tech; e Our solutions _ estão visíveis na home page em inglês', () => {
    cy.visit('/en')
    cy.contains('Our solutions _').should('be.visible')
    cy.get('section').contains('Culture and Tech').should('be.visible')
  })

  
})