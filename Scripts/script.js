// For Navbar

function OpenMenu() {
    const MenuToggle = document.getElementById("ShowHamburger");
    const HamburgerIconBar = document.getElementById("HamburgerIconBar");
    const HamburgerIconBarClose = document.getElementById("HamburgerIconBarClose");
    HamburgerIconBarClose.style.display = "flex";
    MenuToggle.style.display = "flex";
    HamburgerIconBar.style.display = "none";
}

function CloseMenu() {
    const MenuToggle = document.getElementById("ShowHamburger");
    const HamburgerIconBar = document.getElementById("HamburgerIconBar");
    const HamburgerIconBarClose = document.getElementById("HamburgerIconBarClose");
    HamburgerIconBarClose.style.display = "none";
    MenuToggle.style.display = "none";
    HamburgerIconBar.style.display = "flex";
}


// For product filter 
function toggleFilter(header) {
    const options = header.nextElementSibling;
    const arrow = header.querySelector("span");
    const isVisible = options.style.display === "block";

    options.style.display = isVisible ? "none" : "block";
    arrow.classList.toggle("rotate", !isVisible);
  }

  function toggleFilter(header) {
    const options = header.nextElementSibling;
    const arrow = header.querySelector("span");
    const isVisible = options.style.display === "block";

    options.style.display = isVisible ? "none" : "block";
    arrow.classList.toggle("rotate", !isVisible);
  }

  function resetFilters() {
    // Clear all checkboxes and radio buttons
    const inputs = document.querySelectorAll('aside input[type="checkbox"], aside input[type="radio"]');
    inputs.forEach(input => input.checked = false);
  }

// For product filter

// Aside Bar OnOff

function openAsideBar() {
    const asideBar = document.getElementById("asideBar");
    const FilterIcon = document.getElementById("FilterIcon");
    const XmarkClose = document.getElementById("XmarkClose");
    asideBar.style.display = "block";
    FilterIcon.style.display = "none";
    XmarkClose.style.display = "flex";
}
function closeAsideBar() {  
    const asideBar = document.getElementById("asideBar");
    const FilterIcon = document.getElementById("FilterIcon");
    const XmarkClose = document.getElementById("XmarkClose");
    asideBar.style.display = "none";
    FilterIcon.style.display = "block";
    XmarkClose.style.display = "none";
}

// Aside Bar OnOff


// Product Fatching

// Dark Mode Light Mode

// Dark Mode Toggle
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');

darkModeCheckbox.addEventListener('change', () => {
  if (darkModeCheckbox.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});


// Dark Mode Light Mode


// Shopping Cart

function CloseShoppingCart() {
  const shoppingCartContainer = document.getElementById("shoppingCartContainer");
  shoppingCartContainer.style.display = "none";

}

function OpenShoppingCart() {
  const shoppingCartContainer = document.getElementById("shoppingCartContainer");
  shoppingCartContainer.style.display = "flex";
}

// Shopping Cart End