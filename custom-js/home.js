var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);



document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".animate-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // 👈 Ye line har baar animation reset karegi
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => {
        observer.observe(card);
    });
});