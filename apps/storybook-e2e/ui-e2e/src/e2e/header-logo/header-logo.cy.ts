describe('shared-ui: HeaderLogo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headerlogo--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to HeaderLogo!');
    });
});
