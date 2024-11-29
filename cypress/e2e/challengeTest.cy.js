// Test Case 1: Search for a Product.
describe('Search for a Product', () => {
    beforeEach(() => {
      // Navigate to the homepage of the THEMERC website
      cy.visit('https://www.dell.com/');
      
    });
  
    it('Verify user can search for a product and view the search results', () => {
      // Navigate to the search bar
      cy.get("input[placeholder='Search Dell']").click().type('Inspiron 15 Laptop');
  
      // Submit the search query
      cy.get("button[aria-label='Search Dell']").click();
  
      // Click on the first displayed product
      cy.get("h3 a").first().click();

      // Verify Title of the product matches with Search name
      cy.get("div[id='hero-section'] span[class='page-title']").invoke('text').should('contain', 'Inspiron 15 Laptop');

    });
  });
  

  // Test Case 2: Add product to the cart
describe('Add prodcut to the cart', () => {
    beforeEach(() => {
      cy.clearCookies()
      // Navigate to the homepage of the THEMERC website
      cy.visit('https://www.dell.com/');
      
    });
  
    it('Verify user can add a product to the cart', () => {
      // Navigate to the search bar
      cy.get("input[placeholder='Search Dell']").click().type('XPS 15 Laptop');
  
      // Submit the search query
      cy.get("button[aria-label='Search Dell']").click();
  
      // Click on the first displayed product
      cy.get("h3 a").first().click();

      // Verify Title of the product
      cy.get("div[id='hero-section'] span[class='page-title']").invoke('text').should('contain', 'XPS 15 Laptop');

      // Click on the Add to Cart button
      cy.get("section[id='bottom-navbar'] button[data-test-id='add-to-cart']").click({force: true});
      
      // Click on the Cart icon
      cy.get("div[class='mh-cart'] a[role='button'][hm-item-singular='item']").click({force: true});

      // Click on the subtotal
      cy.get("span[class='mh-saved-subtotal-label']").click({force: true} )

      // Verify that the cart count increases by one
      cy.get("span[id='cart-items']").then(($div) => {
        expect($div).to.have.text(' (1 item) ')
      })

      // Verify Name of the Product added to cart
       cy.get("a[id^='nameLink']").then(($div) => {
       expect($div).to.include.text('XPS 15 Laptop')
       })

    });
  });