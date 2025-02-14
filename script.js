// Attempt to play music on load
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');
  if (audio) {
    audio.volume = 0.7; // Adjust volume as needed
    audio.play().catch(err => {
      console.log('Autoplay blocked:', err);
    });
  }

  // On final.html, populate hidden fields with stored data
  if (window.location.pathname.includes('final.html')) {
    const restaurant = localStorage.getItem('selectedRestaurant') || '';
    const activity = localStorage.getItem('selectedActivity') || '';
    const gift = localStorage.getItem('selectedGift') || '';

    // Put them into hidden inputs
    document.getElementById('restaurantInput').value = restaurant;
    document.getElementById('activityInput').value = activity;
    document.getElementById('giftInput').value = gift;
  }
});

// Navigation function
function nextPage(page) {
  window.location.href = page;
}

// Save Restaurant choice to localStorage, then go to Activity page
function saveRestaurant() {
  const selected = document.querySelector('input[name="restaurant"]:checked');
  if (selected) {
    localStorage.setItem('selectedRestaurant', selected.value);
    nextPage('activity.html');
  } else {
    alert('Por favor, elige un restaurante antes de continuar.');
  }
}

// Save Activity choice to localStorage, then go to Gift page
function saveActivity() {
  const selected = document.querySelector('input[name="activity"]:checked');
  if (selected) {
    localStorage.setItem('selectedActivity', selected.value);
    nextPage('gift.html');
  } else {
    alert('Por favor, elige una actividad antes de continuar.');
  }
}

// Save Gift choice to localStorage, then go to goldenconrosa.html
function saveGift() {
  const selected = document.querySelector('input[name=\"gift\"]:checked');
  if (selected) {
    localStorage.setItem('selectedGift', selected.value);
    nextPage('goldenconrosa.html'); // Go to the special page
  } else {
    alert('Por favor, elige un regalo antes de continuar.');
  }
}

