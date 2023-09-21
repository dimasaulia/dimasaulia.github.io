const CERTIFICATE = {
    smartdoorlock: {
        title: "Kompetisi Mahasiswa Informatika Politeknik Nasional - Bronze on IoT Field",
        desc: "No desc Yet",
        link: "https://drive.google.com/file/d/10e0LJ-wyYWfNugoA-fKm3ZH6iiiiulr-/preview ",
    },
    other: {
        title: "Agricultural Innovation Technology Competition - Bronze on Technology Inovation (IoT)",
        desc: "No desc Yet",
        link: "https://drive.google.com/file/d/1uWwUAU_87eUSk_cUEiME-hfkUBTD7-NW/preview",
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
    const cert_url = document.querySelector("#cert-url");
    const cert_title = document.querySelector("#cert-title");

    if (d.getAttribute("data-category") === cert_category) {
        console.log("Benas");
        d.nextElementSibling.classList.remove("hidden");
        d.parentElement.classList.add("active-navbar");
    }
});
