const users = [
    {
        id: 1,
        user: "Samuel Leão",
        stack: "Front end Engineer",
        img: "./assets/slomaoLeao.png",
    },
    {
        id: 2,
        user: "Samuel Persuhn",
        stack: "Front end Engineer",
        img: "./assets/samuel.png",
    },
    {
        id: 3,
        user: "Carlos Lima",
        stack: "UX e UI Designer",
        img: "./assets/carlos.png",
    },
    {
        id: 4,
        user: "Carla Maria",
        stack: "Back end Engineer",
        img: "./assets/carla.png",
    },
    {
        id: 5,
        user: "Júlia Martins",
        stack: "Devop's",
        img: "./assets/julia.png",
    },
];

const posts = [
    {
        id: 1,
        title: "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
        text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
        user: "Iris Silva",
        stack: "Front end Engineer",
        img: "./assets/samuel.png",
        likes: 25,
    },
    {
        id: 2,
        title: "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
        text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
        user: "Carla Maria",
        stack: "Back end Engineer",
        img: "./assets/carla.png",
        likes: 19,
    },
    {
        id: 3,
        title: "O que é programação orientada a objetos e programação funcional",
        text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
        user: "Júlia Martins",
        stack: "Devop's",
        img: "./assets/julia.png",
        likes: 8,
    },
];

const suggestUsers = [
    {
        id: 1,
        user: "Carlos Lima",
        stack: "UX e UI Designer",
        img: "./assets/carlos.png",
    },
    {
        id: 2,
        user: "Larissa Lima",
        stack: "Devop's",
        img: "./assets/Larissa.png",
    },
    {
        id: 3,
        user: "Rafael Bertoldo",
        stack: "Fullstack Engineer",
        img: "./assets/Filipe.png",
    },
];

function renderUsersSuggest(list) {
    let suggestions = document.querySelector(".suggestion-list-posts");
    for (let i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        let buttonFollow = document.createElement("button");
        let profile = createProfile(list[i]);

        buttonFollow.innerText = "Seguir";
        buttonFollow.className = "button-follow";

        li.append(profile, buttonFollow);
        suggestions.append(li);
    }
}
function createProfile(list) {
    let divInformationProfile = document.createElement("div");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let secondDivInformation = document.createElement("div");
    let profileName = document.createElement("h1");
    let description = document.createElement("p");

    divInformationProfile.className = "information-profile";
    img.src = list.img;
    profileName.innerText = list.user;
    description.innerText = list.stack;

    divInformationProfile.append(figure, secondDivInformation);
    figure.append(img);
    secondDivInformation.append(profileName, description);
    return divInformationProfile;
}
function renderPosts(list) {
    let ulListPosts = document.createElement("ul");
    let sectionPost = document.querySelector(".section-posts");
    for (let i = 0; i < list.length; i++) {
        
        let post = document.createElement("li");
        let profile = createProfile(list[i]);
        let divTitleText = document.createElement("div");
        let titlePost = document.createElement("h2");
        let text = document.createElement("p");
        let divPost = document.createElement("div");
        let buttonPost = document.createElement("button");
        let figure = document.createElement("figure");
        let like = document.createElement("strong");
        let divHeartLike = document.createElement("div");

        ulListPosts.className = "list-posts";
        post.className = "post";
        titlePost.className = "title-post";
        titlePost.innerText = list[i].title;
        divPost.className = "div-post";
        figure.className = "image-heart";
        buttonPost.innerText = "Abrir Post";
        buttonPost.className = "open-post";
        divTitleText.className = "div-title-text";
        text.innerText = list[i].text;
        like.innerText = list[i].likes;
        divHeartLike.className = "div-heart-like";

        sectionPost.append(ulListPosts);
        ulListPosts.append(post);
        post.append(profile, divTitleText, divPost);
        divTitleText.append(titlePost, text);
        divPost.append(buttonPost, divHeartLike);
        divHeartLike.append(figure, like);

        buttonPost.setAttribute("data-id", list[i].id);
        buttonPost.addEventListener("click", (e) => {
            let id = Number(buttonPost.getAttribute("data-id"));
            console.log(id);
            if (id === list[i].id) {
                let modalPost = list[i];
                renderModal(modalPost);
            }
           
        });
        
    }
    
}
function renderModal(posts) {
    let section = document.querySelector(".section-posts");
    let divFade = document.createElement("div");
    let modal = document.createElement("div");
    let divHeader = document.createElement("div");
    let buttonExit = document.createElement("button");
    let profile = createProfile(posts);
    let divDescription = document.createElement("div");
    let title = document.createElement("h2");
    let text = document.createElement("p");

    divFade.id = "fade";
    modal.id = "modal";
    divHeader.className = "modal-header";
    buttonExit.className = "button-exit-modal";
    divDescription.className = "description-modal";

    title.innerText = posts.title;
    text.innerText = posts.text;
    buttonExit.innerText = "X";

    section.append(divFade, modal);
    modal.append(divHeader, divDescription);
    divHeader.append(buttonExit, profile);
    divDescription.append(title, text);
    console.log("sdas");

    buttonExit.addEventListener("click", (e) => {
        section.parentElement.children[1].removeChild(modal);
        section.parentElement.children[1].removeChild(divFade);
    });
}
function like(posts){
    likeButton = document.querySelectorAll(".image-heart");
    for(let i = 0; i < likeButton.length; i++){
        likeButton[i].setAttribute("data-id", posts[i].id);
    }
    for(let i = 0; i < likeButton.length; i++){
        likeButton[i].addEventListener("click", (e) =>{
            let id = Number(likeButton[i].getAttribute("data-id"))
            for(let j = 0; j < posts.length; j++){
                if(id === posts[i].id){
                    likeButton[i].classList.toggle("image-heart-red")
                    likeButton[i].classList.toggle("image-heart")
                }
                
            }
        })
    }
}

function buttonsSuggestion(list){
    button = document.querySelectorAll(".button-follow");
    for(let i = 0; i < button.length; i++){
        button[i].setAttribute("data-id", posts[i].id);
    }
    for(let i = 0; i < button.length; i++){
        button[i].addEventListener("click", (e) =>{
            let id = Number(button[i].getAttribute("data-id"))
            for(let j = 0; j < list.length; j++){
                if(id === list[i].id){
                    button[i].classList.toggle("button-follow")
                    button[i].classList.toggle("button-following")
                }
                
            }
        })
    }
}
let postsGlobal
function sentPost(){
    let form = document.querySelector(".form-sent-post")
    let divUl = document.querySelector(".list-posts")
    let carlos = {
        id: 1,
        title: "",
        text: "",
        user: "Samuel Leao",
        stack: "Front end Engineer",
        img: "./assets/salomaoLeao.png",
        likes: 0,

    }
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        let input = document.querySelector("#posts")
        let textArea = document.querySelector("#text")
        console.log("klaks");
        if(input.value != "" && textArea.value != ""){
            carlos.title += input.value
            carlos.text += text.input
            posts.splice(0, 0, carlos)
            like(posts)
            divUl.innerHTML = ""
            renderPosts(posts)
            console.log(posts);
        }
    })
}
renderUsersSuggest(suggestUsers);
renderPosts(posts);
sentPost()
buttonsSuggestion(posts)
