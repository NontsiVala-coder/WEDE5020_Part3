
/*Accordion functionality for the programmes page*/
const accordions =
document.querySelectorAll(".accordion");

accordions.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const panel =
        button.nextElementSibling;

        if (panel.style.display === "block") {
            
            panel.style.display = "none";
        } else {

            panel.style.display = "block";
        }

    });

});

/*Lightbox functionality for the gallery page*/
const galleryImages = 
document.querySelectorAll(".gallery-image");

const lightbox = 
document.getElementById("lightbox");

const lightboxImage = 
document.getElementById("lightbox-image");

galleryImages.forEach (image => {

image.addEventListener("click", () => {

lightbox.style.display = "flex";

lightboxImage.src = image.src;

});

});


if(lightbox){

lightbox.onclick = () => {

lightbox.style.display = "none";

};

}

/*Search functionality for the programmes page*/
const searchInput = 
document.getElementById("searchInput");

if(searchInput){
    searchInput.addEventListener("keyup", () => {
    
    let filter = searchInput.value.toLowerCase();

    const programmes = document.querySelectorAll("#programmeList li");

    programmes.forEach(programme => {
        if (programme.textContent.toLowerCase().includes(filter)) {
            programme.style.display = "";
        }   else {
            programme.style.display = "none";
        }
    });
    
});
}

/*Contact Form validation submission functionality for the contact and enquiry pages*/
const contactForm = document.getElementById("contactForm");

if(contactForm){
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        alert("Thank you for your enquiry. We will get back to you soon.");

    });
}

/*Enquiry Form validation submission functionality for the enquiry page*/
const enquiryForm = document.getElementById("enquiryForm");

if(enquiryForm){
    enquiryForm.addEventListener("submit", (event) => {
        event.preventDefault();

const choice = document.getElementById("interest").value;

alert("Thank you for your interest in our " + choice + " programme. We will get back to you soon.");

    });
}

/*Map functionality for the contact page*/

const mapContainer = document.getElementById("map");

if (mapContainer) {
    const map = L.map('map').setView([-26.2041, 28.0473], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

    L.marker([-26.2041, 28.0473]).addTo(map)
        .bindPopup('Leratong Joy For One Foundation');
}
