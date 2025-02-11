const sobre = document.querySelector("#sobre");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
    try {
        const response = await fetch("https://api.github.com/users/victorpestana");
        const perfil = await response.json();

        let conteudo = `
       
                <!-- Imagem da Seção Sobre -->
                <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github">
                <!-- Texto da Seção Sobre -->
                <article id="about_texto">
                    <h2>Sobre mim</h2>
                    <p>Jovem desenvolvedor FullStack Javascript de 19 anos, buscando sua primeira oportunidade na área.</p>
                    <!-- Detalhes do Github -->
                    <div id="about_github" class="flex sobre_github">
                        <a href="https://github.com/VictorPestana" target="_blank" class="botao">
                            Github
                        </a>
                        <p>${perfil.followers} Seguidores</p>
                        <p>${perfil.public_repos} Repositórios</p>
                    </div>
                </article>
        `;

        if (sobre) {
            sobre.innerHTML += conteudo;
        } else {
            console.error("Element with ID 'sobre' not found.");
        }
    } catch (error) {
        console.error(error);
    }
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();
 
    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");
 
    if (campoNome.value.length < 3) {
        txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres.";
        campoNome.focus();
        return;
    } else {
        txtNome.innerHTML = "";
    }
 
    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");
 
    if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = "Digite um e-mail válido.";
        campoEmail.focus();
        return;
    } else {
        txtEmail.innerHTML = "";
    }
 
    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");
 
    if (campoAssunto.value.length < 5) {
        txtAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres.";
        campoAssunto.focus();
        return;
    } else {
        txtAssunto.innerHTML = "";
    }
 
    formulario.submit();
});
 
getApiGithub();
