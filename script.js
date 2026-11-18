
// 1. Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// 2. Search Fashion Categories
function searchItems() {
    let input = document.getElementById("searchInput")
        .value.toLowerCase();

    let items = document.querySelectorAll(".Item-tag");

    items.forEach(function(item) {
        let text = item.innerText.toLowerCase();

        let cell = item.closest("td");
        let imageCell = cell.previousElementSibling;

        if (text.includes(input)) {
            cell.style.display = "";
            imageCell.style.display = "";
        } else {
            cell.style.display = "none";
            imageCell.style.display = "none";
        }
    });
}

// 3. Newsletter Subscription
function subscribe() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (email === "" || !email.includes("@")) {
        message.innerText = "Please enter a valid email!";
        message.style.color = "red";
    } else {
        message.innerText = "Thank you for subscribing!";
        message.style.color = "green";

        document.getElementById("email").value = "";
    }
}

// 4. Back to Top Button
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
