/// <reference types = "cypress" />
var faker = require('faker')

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomefaker = faker.name.firstName()
        let SobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste12')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(SobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

it ('Deve completar usando o pré-cadastro com sucesso Comando customizados', () => {
    let emailFaker2 = faker.internet.email()
    cy.preCadastro(emailFaker2 , ' senha!@#forte', 'Pedro' , 'Dias')
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
});

});