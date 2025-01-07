const qrtext = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generate-btn');
const downloadbtn = document.getElementById('download-btn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

// Generate button click
generatebtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (qrtext.value.length > 0) {
        generateQRCode();
    } else {
        alert("Enter the text or URL to generate your QR Code");
    }
});

// Size change event
sizes.addEventListener('change', (e) => {
    size = e.target.value;
    if (qrtext.value.length > 0) {
        generateQRCode();
    }
});

// Download button click
downloadbtn.addEventListener('click', () => {
    let img = document.querySelector(".qr-body img");
    if (img) {
        let imgAttr = img.getAttribute('src');
        downloadbtn.setAttribute("href", imgAttr);
    } else {
        downloadbtn.setAttribute("href", document.querySelector('canvas').toDataURL());
    }
});

// Function to generate QR code
function generateQRCode() {
    qrContainer.innerHTML = "";  
    new QRCode(qrContainer, {
        text: qrtext.value,
        width: size,
        height: size,
        colorDark: "#000",
        colorLight: "#fff"
    });
}
