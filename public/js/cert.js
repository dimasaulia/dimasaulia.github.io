const CERTIFICATE = {
    nde: {
        title: "Network Defense Esential",
        desc: "No desc Yet",
        link: "https://drive.google.com/file/d/1dSLD0WWDKsryZK7m298QYMHDVyRXuqad/preview",
    },
    cscu: {
        title: "Certified Secure Computer User",
        desc: "No desc Yet",
        link: "https://drive.google.com/file/d/1UqmreqNKULQ48OnBgL44REqjMSzUHSmZ/preview",
    },
    fe: {
        title: "Fullstack Web Development",
        desc: "No desc Yet",
        link: "https://drive.google.com/file/d/1Ue3o-A5C0RLsEgn8XUPKwAuCNoYTQe9G/preview",
    },
    jwd: {
        title: "Junior Web Development",
        desc: "No desc Yet",
        link: "https://drive.google.com/file/d/1CZXaxUHzyH3_i-N781tyOrC7i4hjz2HE/preview",
    },
    golang_be: {
        title: "Golang Backend Developer",
        desc: "No desc Yet",
        link: "https://drive.google.com/file/d/1FM7b8FRRhHZonTcnhyxckl_LjIf59tYh/preview",
    },
};

const cert_container = document.querySelectorAll(".cert");

cert_container.forEach((container) => {
    container.addEventListener("click", (e) => {
        e.preventDefault();

        // Clear Style
        cert_container.forEach((d) => {
            const parent_container = d.parentElement;
            parent_container.classList.remove("active-navbar");
            d.nextElementSibling.classList.add("hidden");
        });

        const current_url = window.location.href;
        const url = new URL(current_url);
        url.searchParams.set("c", container.getAttribute("data-category"));
        const updatedURL = url.toString();
        history.replaceState(null, null, updatedURL);

        container.nextElementSibling.classList.remove("hidden");
        container.parentElement.classList.add("active-navbar");

        const cert_category = url.searchParams.get("c");
        const cert_detail = CERTIFICATE[cert_category];
        const cert_title = document.querySelector("#cert-title");
        const cert_url = document.querySelector("#cert-url");
        cert_url.classList.add("iframe-loading");
        cert_title.classList.add("iframe-loading");

        cert_title.textContent = cert_detail?.title || "";
        cert_url.setAttribute("src", cert_detail.link);
        cert_url.addEventListener("load", () => {
            cert_url.classList.remove("iframe-loading");
            cert_title.classList.remove("iframe-loading");
        });
    });
});

// RUN ONCE
const current_url = window.location.href;
const url = new URL(current_url);
const cert_category = url.searchParams.get("c");

cert_container.forEach((d) => {
    const parent_container = d.parentElement;
    parent_container.classList.remove("active-navbar");
    d.nextElementSibling.classList.add("hidden");

    const cert_detail = CERTIFICATE[cert_category];
    const cert_title = document.querySelector("#cert-title");
    const cert_url = document.querySelector("#cert-url");
    cert_title.textContent = cert_detail?.title || "";
    cert_url.setAttribute("src", cert_detail.link);

    // Update Style
    if (d.getAttribute("data-category") === cert_category) {
        d.nextElementSibling.classList.remove("hidden");
        d.parentElement.classList.add("active-navbar");
    }
});
