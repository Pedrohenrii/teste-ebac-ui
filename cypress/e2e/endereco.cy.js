///  <reference  types = "cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEnderecoFaturamento = require ('../fixtures/endereco.json')
describe('Funcionalidade endereço  - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro  de faturamento com sucesso ', () => {

        EnderecoPage.editarEnderecoFaturamento('Isabella', 'Araújo','Ebac','Brasil','Av São Luiz','200','São Paulo', 'São Paulo','04409222','11999999999','teste@testes.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    }); 

    it('Deve fazer cadastro  de faturamento com sucesso - usando arquivo de dados', () => {

       EnderecoPage.editarEnderecoFaturamento (
        dadosEnderecoFaturamento [1].nome,
        dadosEnderecoFaturamento[1].Sobrenome,
        dadosEnderecoFaturamento[1].empresa,
        dadosEnderecoFaturamento[1].país,
        dadosEnderecoFaturamento[1].endereco,
        dadosEnderecoFaturamento[1].numero,
        dadosEnderecoFaturamento[1].cidade,
        dadosEnderecoFaturamento[1].estado,
        dadosEnderecoFaturamento[1].cep,
        dadosEnderecoFaturamento[1].telefone,
        dadosEnderecoFaturamento[1].email,
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});