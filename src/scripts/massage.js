const eventButton = () => {
    const button = document.querySelector(".internal-div__new-search");
    button.addEventListener("click", (e) => {
        window.location.href = "./index.html";
    });
};
eventButton();
