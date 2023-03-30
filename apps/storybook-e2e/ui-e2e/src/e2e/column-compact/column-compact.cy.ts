describe('shared-ui: ColumnCompact component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=columncompact--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ColumnCompact!');
    });
});
