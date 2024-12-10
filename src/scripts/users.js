const login = localStorage.getItem("login");
const avatar = localStorage.getItem("avatar");
const StorageRepository = localStorage.getItem("repository");

const renderUser = (login, avatar) => {
    console.log(avatar, login);

    const figure = document.querySelector(".user__profile-img");
    const divHeader = document.querySelector(".header__user");
    const listRepository = document.querySelector(
        ".main-repository-list__repository-list"
    );
    const buttonChangeUser = document.querySelector(".header__change-user");

    const img = document.createElement("img");
    const titleName = document.createElement("h1");

    titleName.className = "user__profile-name";

    const repository = StorageRepository ? JSON.parse(StorageRepository) : [];
    console.log(repository);

    img.src = avatar;
    img.alt = "Avatar do usuário";
    titleName.textContent = login;

    repository.forEach((rep) => {
        const { name, description, html_url } = rep;
        console.log(name, description, html_url);

        const li = document.createElement("li");
        const title = document.createElement("h3");
        const p = document.createElement("p");
        const buttonRepository = document.createElement("button");

        li.className = "repository-list__repository";
        title.className = "repository__title";
        p.className = "repository__description";
        buttonRepository.className = "repository__view-repository";

        title.textContent = name;
        p.textContent = description;
        buttonRepository.textContent = "Repositório";

        li.append(title, p, buttonRepository);
        listRepository.append(li);

        buttonRepository.addEventListener("click", (event) => {
            handleRepositoryChange(event, html_url);
        });
    });

    buttonChangeUser.addEventListener("click", (e) => {
        window.location.href = "./index.html";
    });

    figure.appendChild(img);
    divHeader.appendChild(titleName);
};

const handleRepositoryChange = (event, repository) => {
    const button = event.target.closest(".repository__view-repository");
    if (!button) return;

    window.location.href = repository;
};

renderUser(login, avatar);
