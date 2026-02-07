/**
 * Toggles the flipped state of a flip card element
 * @param {HTMLElement} card - The flip card element to toggle
 */
function flipCard(card) {
  if (!card || !(card instanceof HTMLElement)) {
    console.warn('flipCard: Invalid card element provided');
    return;
  }
  card.classList.toggle('flipped');
}

// Initialize flip cards with event listeners for better accessibility
document.addEventListener('DOMContentLoaded', function() {
  const flipCards = document.querySelectorAll('.flip-card');
  
  flipCards.forEach(function(card) {
    // Remove inline onclick handlers and use event listeners instead
    card.removeAttribute('onclick');
    
    // Add click event listener
    card.addEventListener('click', function() {
      flipCard(card);
    });
    
    // Add keyboard accessibility (Enter and Space keys)
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Flip card to see more information');
    
    card.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        flipCard(card);
      }
    });
  });
});
