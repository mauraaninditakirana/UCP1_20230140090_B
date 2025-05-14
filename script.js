// --- POP-UP PROMO: Selalu Muncul Tiap Awal Buka Web ---
window.addEventListener("load", function () {
  const popup = document.getElementById("popup-promo");
  const overlay = document.getElementById("popup-overlay");

  if (popup && overlay) {
    popup.style.display = "block";
    overlay.style.display = "block";
  }
});

function tutupPopup() {
  const popup = document.getElementById("popup-promo");
  const overlay = document.getElementById("popup-overlay");

  if (popup && overlay) {
    popup.style.display = "none";
    overlay.style.display = "none";
  }
}

// --- FORM KONTAK: Munculkan Alert "Formulir berhasil dikirim!" ---
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // cegah kirim form beneran
      alert("Formulir anda berhasil dikirim!");
      form.reset();
    });
  }
});
