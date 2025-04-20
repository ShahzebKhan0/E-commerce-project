let user = JSON.parse(localStorage.getItem("user")) || null;

window.onload = () => {
  if (user && user.loggedIn) {
    showProfile();
  }
  document.getElementById("themeToggle").addEventListener("change", toggleDarkMode);
};

function showLogin() {
  document.getElementById("auth-step").style.display = "none";
  document.getElementById("login-step").style.display = "block";
}

function signUp() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (!name || !email || !password) return showAlert("Please fill all fields");

  user = {
    name,
    email,
    password,
    address: "",
    mobile: "",
    pincode: "",
    image: "",
    loggedIn: true
  };
  localStorage.setItem("user", JSON.stringify(user));
  showAlert("Account created successfully!");
  showProfile();
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (!user || email !== user.email || password !== user.password) {
    return showAlert("Incorrect email or password");
  }

  user.loggedIn = true;
  localStorage.setItem("user", JSON.stringify(user));
  showAlert("Login successful!");
  showProfile();
}

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    user.loggedIn = false;
    localStorage.setItem("user", JSON.stringify(user));
    location.reload();
  }
}

function showProfile() {
  document.getElementById("auth-step").style.display = "none";
  document.getElementById("login-step").style.display = "none";
  document.getElementById("profile-step").style.display = "block";

  document.getElementById("user-name-display").textContent = user.name;
  document.getElementById("name").value = user.name || "";
  document.getElementById("address").value = user.address || "";
  document.getElementById("mobile").value = user.mobile || "";
  document.getElementById("pincode").value = user.pincode || "";
  if (user.image) document.getElementById("profile-image").src = user.image;
}

function saveProfile() {
  user.name = document.getElementById("name").value;
  user.address = document.getElementById("address").value;
  user.mobile = document.getElementById("mobile").value;
  user.pincode = document.getElementById("pincode").value;

  localStorage.setItem("user", JSON.stringify(user));
  showAlert("Profile updated successfully!");
  toggleEditMode(); // return to readonly
}

function toggleEditMode() {
  const inputs = ["name", "address", "mobile", "pincode"];
  const saveBtn = document.getElementById("saveBtn");

  if (saveBtn.style.display === "none") {
    inputs.forEach(id => document.getElementById(id).removeAttribute("readonly"));
    saveBtn.style.display = "block";
  } else {
    inputs.forEach(id => document.getElementById(id).setAttribute("readonly", true));
    saveBtn.style.display = "none";
  }
}

function changePassword() {
  const newPassword = prompt("Enter new password:");
  if (newPassword) {
    user.password = newPassword;
    localStorage.setItem("user", JSON.stringify(user));
    showAlert("Password changed successfully!");
  }
}

function changeProfilePic(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      document.getElementById("profile-image").src = e.target.result;
      user.image = e.target.result;
      localStorage.setItem("user", JSON.stringify(user));
    };
    reader.readAsDataURL(file);
  }
}

function showAlert(message) {
  const alertBox = document.getElementById("custom-alert");
  alertBox.innerText = message;
  alertBox.style.display = "block";
  setTimeout(() => (alertBox.style.display = "none"), 3000);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
