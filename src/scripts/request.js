export async function consomeGitHubAPI(value) {
    if (!value) {
        alert("Por favor, insira um nome de usuário do GitHub.");
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${value}`);

        if (!response.ok) {
            throw new Error("erro ao obter");
        }

        const user = await response.json();

        return user;
    } catch (error) {
        console.log("erro:", error);
        return { results: [] };
    }
}

export async function requestRepository(value) {
    if (!value) {
        alert("Por favor, insira um nome de usuário do GitHub.");
        return;
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${value}/repos`
        );

        if (!response.ok) {
            throw new Error("erro ao obter");
        }

        return await response.json();
    } catch (error) {
        console.log("erro", error);
        return { results: [] };
    }
}
