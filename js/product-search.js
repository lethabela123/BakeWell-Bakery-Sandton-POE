// product-search.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById('productSearch');
  const productSection = document.getElementById('productSection');

  // Listen for input in the search box
  searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toLowerCase();
    const flipCards = productSection.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
      let match = false;
      // Check all product names inside each flip card
      const productNames = card.querySelectorAll('.product-items p');

      productNames.forEach(p => {
        if (p.textContent.toLowerCase().includes(filter)) {
          match = true;
        }
      });

      // Show or hide the card based on search match
      card.style.display = match ? '' : 'none';
    });
  });
});
