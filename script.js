// Funkcja do załadowania zawartości home.html za pomocą AJAX
function loadPage(page) {
  var xhr = new XMLHttpRequest();

  // Otwieramy żądanie GET do pliku home.html
  xhr.open('GET', page, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Wstawiamy załadowaną zawartość do kontenera
      document.querySelector('#content').innerHTML = xhr.responseText;
    } else {
      // Obsługuje błąd w przypadku, gdy plik nie zostanie załadowany
      document.querySelector('#content').innerHTML = "<p>Wystąpił problem z ładowaniem strony.</p>";
    }
  };

  // Wykonujemy żądanie
  xhr.send();
}

// Wywołanie AJAX po załadowaniu strony (przy załadowaniu DOM)
document.addEventListener("DOMContentLoaded", function() {
  // Automatycznie ładujemy zawartość home.html
  loadPage('home.html');
});

// Funkcja do załadowania zawartości przy kliknięciu w menu (można używać dla innych linków)
document.querySelectorAll(".menu-link").forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Zapobiegamy domyślnej akcji linku (przejście do innej strony)

    var page = this.getAttribute("href"); // Pobieramy href z klikniętego linku
    loadPage(page); // Ładujemy stronę za pomocą AJAX
  });
});
