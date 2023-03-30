describe('shared-ui: ColumnWithCTA component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=columnwithcta--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ColumnWithCTA!');
    });
});
