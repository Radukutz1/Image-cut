document.addEventListener("DOMContentLoaded", function() {
  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.innerHTML = `
    <p>
      We use cookies to analyze traffic and show personalized ads. 
      By clicking "Accept", you agree to our <a href="/privacy">Privacy Policy</a>.
    </p>
    <div class="cookie-actions">
      <button id="acceptCookies" class="btn-primary">Accept</button>
      <button id="declineCookies" class="btn-secondary">Decline</button>
    </div>
  `;
  document.body.appendChild(banner);

  const acceptBtn = document.getElementById("acceptCookies");
  const declineBtn = document.getElementById("declineCookies");

  // Check if user already chose
  if (!localStorage.getItem("cookieConsent")) {
    banner.style.display = "block";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    // Here you would technically trigger AdSense/Analytics scripts
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    banner.style.display = "none";
  });
});