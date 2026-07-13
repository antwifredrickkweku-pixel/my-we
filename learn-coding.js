const signupForm = document.querySelector(".signup-form");

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(signupForm);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password || String(password).length < 6) {
    return;
  }

  localStorage.setItem("codingHubEmail", email);
  localStorage.setItem("codingHubSignedUp", "true");

  window.location.href = "coding-learning.html";
});
