import Login from "./2-advanced-examples/PageObject/login";



describe("Github", function() {


  const login = new Login()


    it('By', () => {
      cy.visit ('https://unsplash.com/');
      cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash')


      login.btnLogin()
      .should('be.visible')
      .click();
      
      login.email()
      .type('genagir@gmail.com')
      .should('have.value', 'genagir@gmail.com')

      login.password()
      .type('Ivan1111')
      .should('have.value', 'Ivan1111')

      login.clickBtnLogin()
      .should('be.visible')
      .click()

      cy.get('div[class="col-xs-10 col-sm-6 center-block flash__message"]')
      .should('be.visible')


    })
    })
    