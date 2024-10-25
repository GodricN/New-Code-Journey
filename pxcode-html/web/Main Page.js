function smoothTransition() {
    document.body.classList.add('fade-out'); // Add fade-out class
    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/pxcode-html%20(1)/web/UntitledPage.html"; // Redirect after fade-out
    }, 500); // Match timeout duration with CSS transition duration
}
