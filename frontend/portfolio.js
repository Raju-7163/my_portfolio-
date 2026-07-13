const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});
console.log("JavaScript Connected Successfully!");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch("http://localhost:5000/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)

        });

        const data = await response.json();

        if (data.success) {

            alert("Message sent successfully!");

            contactForm.reset();

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.error(error);

        alert("Something went wrong!");

    }

});