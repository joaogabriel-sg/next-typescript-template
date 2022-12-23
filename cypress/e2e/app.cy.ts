describe('Home', () => {
  it('should navigate to home page', () => {
    cy.visit('http://localhost:3000/');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
