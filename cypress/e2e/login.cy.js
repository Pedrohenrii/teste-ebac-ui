/// <reference types = "cypress" />
const perfil = require('../fixtures/perfil.json')

context('funcionalidade login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

 it ('Deve fazer login com sucesso', () =>{

cy.get('#username').type('aluno_ebac@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click ()

cy.get('.page-title') .should ('contain','Minha conta')
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ( 'contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
 })
   
 it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click ()
    cy.get('.page-title') .should ('contain','Minha conta') 
 });
  
  it('Deve fazer login com sucesso usando fixture ', () => {
    cy.fixture('perfil').then(dados=> {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.page-title') .should ('contain','Minha conta') 
    })
    
  });

 
 it('deve exibir uma mensagem de texto ao inserir usuario  invalídos ', () =>{cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
 cy.get('#username').type('alunc@teste.com')
 cy.get('#password').type('teste@teste.')
 cy.get('.woocommerce-form > .button').click ()

 cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')

})

it('deve exibir uma mensagem de texto ao inserir senha  invalídas ', () =>{cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
 cy.get('#username').type('aluno_ebac@teste.com')
 cy.get('#password').type('teste@teste.')
 cy.get('.woocommerce-form > .button').click ()

 cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail')

})

   
} )