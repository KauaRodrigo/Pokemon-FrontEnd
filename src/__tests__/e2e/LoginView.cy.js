import { useUserStore } from "../../stores/userStore"

describe('Tests of Login Page', () => {        
    beforeEach(() => {
        cy.viewport(1920, 1080)        
        cy.visit("http://localhost:4173/login")
    })

    it('test loginView navigation', () => {            
        cy.get('#signin-section')              

        cy.get('#have-account-link').click()
        cy.get('#signup-section')
    })

    it('should create error messages on signin or signup forms', () => {
        cy.get('#email-input').type('kaua@gmail.com')        
        cy.get('#login-btn').click()        
        cy.get('#passwordError')

        cy.get('#email-input').clear()
        cy.get('#password-input').type('kaua1509')
        cy.get('#login-btn').click()
        cy.get('#emailError')
    })      

    it('should verify userTest credencials', () => {        
        const userStore = useUserStore()
        cy.get('#email-input').type('kaua@gmail.com')
        cy.get('#password-input').type('kaua1509')
        cy.get('#email-input').should('have.value', userStore.userTest.email)
        cy.get('#password-input').should('have.value', userStore.userTest.password)
        cy.get('#login-btn').click()
    })

    it('should verify credencials and error messages', () => {
        cy.get('#email-input').type('kauarodrigo@gmail.com')
        cy.get('#emailError')
        
        cy.get('#email-input').clear()
        cy.get('#email-input').type('kaua@gmail.com')
        cy.get('#password-input').type('kauaaa1509')
        cy.get('#passwordError')
        cy.get('#login-btn').click()
    })

    it('should if all login fields are correctly filled', () => {        
        cy.get('#email-input').type('kaua@gmail.com')
        cy.get('#password-input').type('kauaaa1509')
        cy.get('#login-btn').click()
        cy.url().should('includes', '/')
    })
}) 