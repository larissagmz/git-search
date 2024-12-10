import { consomeGitHubAPI } from "./request.js";
import { requestRepository } from "./request.js";

export async function valueUser() {
    const form = document.querySelector(".div-internal__form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const input = document.querySelector(".form__input");
        const value = input.value;

        const user = await consomeGitHubAPI(value);
        const repository = await requestRepository(value);
        console.log(repository);

        const { login, avatar_url } = await user;

        if (user && user.login) {
            localStorage.setItem("login", login);
            localStorage.setItem("avatar", avatar_url);
            localStorage.setItem("repository", JSON.stringify(repository));
            window.location.href = "./users.html";
        } else {
            window.location.href = "./message.html";
        }
    });
}
valueUser();
