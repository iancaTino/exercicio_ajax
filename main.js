async function carregarPerfil() {
    try {
        const resposta = await fetch('https://api.github.com/users/iancaTino')

        if (!resposta.ok) {
            throw new Error('Erro ao buscar dados do GitHub')
        }

        const dados = await resposta.json()
        console.log(dados) // só pra ver o que vem da API

        // Agora vamos jogar esses dados no HTML:
        document.querySelector('.profile-avatar').src = dados.avatar_url
        document.querySelector('.profile-name').textContent = dados.name
        document.querySelector('.profile-username').textContent = `@${dados.login}`
        document.querySelector('.numbers-item:nth-child(1)').innerHTML = `<h4>Repositórios</h4>${dados.public_repos}`
        document.querySelector('.numbers-item:nth-child(2)').innerHTML = `<h4>Seguidores</h4>${dados.followers}`
        document.querySelector('.numbers-item:nth-child(3)').innerHTML = `<h4>Seguindo</h4>${dados.following}`
        document.querySelector('.profile-link').href = dados.html_url

    } catch (erro) {
        console.error('Deu ruim:', erro)
    }
}

carregarPerfil()
