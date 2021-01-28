describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    const userName = () => cy.get('input[name="userName"]');
    const email = () => cy.get('input[name="email"]');
    const password = () => cy.get('input[name="password"]');
    const tos = () => cy.get('input[name="tos"]');
    const role = () => cy.get('select[name="role"]');
    const submitBtn = () => cy.get('button');

    it('Sanity Test', () => {
        expect(1 + 1).to.equal(2);
    });

    it('Test User Name input', () => {
        userName()
        .should('have.value', '')
        .type('Testy')
        .should('have.value', 'Testy')
        .clear()
    });

    it('Test Email input', () => {
        email()
        .should('have.value', '')
        .type('mctesterton@email.com')
        .should('have.value', 'mctesterton@email.com')
        .clear()
    });

    it('Test Password input', () => {
        password()
        .should('have.value', '')
        .type('password')
        .should('have.value', 'password')
        .clear()
    });

    it('Test Role dropdown', () => {
        role()
        .select('Front-End')
        .should('have.value', 'Front-End')
        .select('')
    })

    it('Test T.O.S checkbox', () => {
        tos()
        .should('have.value', 'false')
        .click()
        .should('have.value', 'true')
        .click()
    });

    it('Test submission of user data', () => {
        submitBtn()
        .should('be.disabled');
        userName()
        .type('Testy');
        email()
        .type('mctesterton@email.com');
        password()
        .type('password');
        role()
        .select('Front-End');
        tos()
        .click();
        submitBtn()
        .should('be.enabled')
        .click();
        cy.contains('Testy, Front-End Developer').should('exist');
    })

    it('Test form validation with 1 empty input', () => {
        userName()
        .type('Testy');
        email()
        .type('mctesterton@email.com');
        role()
        .select('Front-End');
        tos()
        .click();
        submitBtn()
        .should('be.disabled');
    })

});

