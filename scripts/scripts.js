const images = document.querySelectorAll(".popup-item img");
let imgSrc;
let currentModal = null;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        // Prevent opening multiple modals
        if (currentModal) {
            return;
        }
        imgSrc = e.target.src;
        // Convert absolute paths to relative paths for local viewing
        if (imgSrc.startsWith('/')) {
            imgSrc = imgSrc.substring(1);
        }
        //run modal function
        imgModal(imgSrc);
    });
});
// Handle escape key to close modal
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentModal) {
        currentModal.remove();
        currentModal = null;
    }
});
//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.body.append(modal);
    currentModal = modal;
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "closeBtn");
    closeBtn.textContent = "×";
    //close function
    closeBtn.onclick = () => {
        modal.remove();
        currentModal = null;
    };
    modal.append(newImage, closeBtn);
};
