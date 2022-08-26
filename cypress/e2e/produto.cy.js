/// <reference types = "cypress" />

describe('Funcionalidade Página de produto', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

    });

    it('Deve adiconar o produto ao carrinho', function () {

            var quantidade = 3;
            cy.get('[class="product-block grid"]')
             .contains('Ariel Roll Sleeve Sweatshirt').click();
            cy.get('.button-variable-item-L').click();
            cy.get('.button-variable-item-Green').click();
            cy.get('.input-text').clear().type(quantidade);
            cy.get('.single_add_to_cart_button').click();

            cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
        });

        it('Deve adicionar Produto ao carinho - Usando Comando costumizado ', () => {
            cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black' ,3)
        });
        
        
        it('Deve adicionar Produto ao carinho - Usando Comando costumizado ', () => {
            cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red' ,1)
        });

});