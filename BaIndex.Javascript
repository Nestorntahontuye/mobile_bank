document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simulate storing the data locally
  localStorage.setItem("capturedEmail", email);
  localStorage.setItem("capturedPassword", password);

  document.getElementById("result").innerText = "Details submitted! Simulation successful.";
});