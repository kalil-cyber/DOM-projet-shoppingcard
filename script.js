document.addEventListener("DOMContentLoaded", function() {

    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
      let totalPrice = 0;
      document.querySelectorAll('.card-body').forEach(card => {
        const quantity = parseInt(card.querySelector('.quantity').textContent, 10);
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace(' $', ''));
        totalPrice += quantity * unitPrice;
      });
      document.querySelector('.total').textContent = `${totalPrice.toFixed(2)} $`;
    }
  
    // Fonction utilitaire pour obtenir les éléments nécessaires
    function getCardElements(card) {
      return {
        quantitySpan: card.querySelector('.quantity'),
        plusButton: card.querySelector('.fa-plus-circle'),
        minusButton: card.querySelector('.fa-minus-circle'),
        trashButton: card.querySelector('.fa-trash-alt'),
        heartButton: card.querySelector('.fa-heart'),
      };
    }
  
    // Initialiser les actions sur les cartes
    document.querySelectorAll('.card-body').forEach(card => {
      const { quantitySpan, plusButton, minusButton, trashButton, heartButton } = getCardElements(card);
  
      // Augmenter la quantité
      plusButton.addEventListener('click', () => {
        quantitySpan.textContent = parseInt(quantitySpan.textContent, 10) + 1;
        updateTotalPrice();
      });
  
      // Diminuer la quantité
      minusButton.addEventListener('click', () => {
        let quantity = parseInt(quantitySpan.textContent, 10);
        if (quantity > 0) {
          quantitySpan.textContent = quantity - 1;
          updateTotalPrice();
        }
      });
  
      // Supprimer la carte
      trashButton.addEventListener('click', () => {
        card.remove();
        updateTotalPrice();
      });
  
      // Aimer l'article
      heartButton.addEventListener('click', () => {
        heartButton.style.color = heartButton.style.color === 'red' ? 'black' : 'red';
      });
    });
  
    // Initialiser le prix total au chargement
    updateTotalPrice();
  
  });
  