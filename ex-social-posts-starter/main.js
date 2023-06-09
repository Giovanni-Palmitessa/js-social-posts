const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "25-06-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "03-09-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "15-05-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=48"
        },
        "likes": 56,
        "created": "03-04-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "05-03-2021"
    }
];

//SELEZIONIAMO TUTTI GLI ELEMENTI CHE SERVONO
let postContainer = document.querySelector('.posts-list');
let likedPosts = [];


// CICLO FOR PER STAMPARE IN PAGINA I POST
postContainer.innerHTML = '';
for (let i = 0; i < posts.length; i++) {
    let post = posts[i];

    postContainer.innerHTML += `
        <div class="post">
        <div class="post__header">
                    <div class="post-meta">
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${post.author.name}</div>
                            <div class="post-meta__time">${post.created}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${post.content}</div>
                <div class="post__image">
                    <img src="${post.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <div class="like-button  js-like-button" data-postid="${post.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </div>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div>
                </div>
        </div>
    `
};

let likeBtn = document.querySelectorAll('.like-button');
let likeCounter = document.querySelectorAll('.js-likes-counter');

for (let i = 0; i < likeBtn.length; i++) {
    const likeCtr = likeBtn[i];
    likeCtr.addEventListener('click', function() {
        this.classList.toggle('red');

        if(likeCtr.classList.contains('red')) {
            likeCounter[i].innerHTML++;
            // likedPosts.push[]
        } else {
            likeCounter[i].innerHTML--
        }
    })
};

// for (let i = 0; i < likeCounter.length; i++) {
//     const counter = likeCounter[i];
//     counter.innerHTML += likeCounter[i] + 1;
// }

// likeBtn.addEventListener('click' , function() {
//     likeBtn.classList.toggle('red');
//     likeCounter.innerHTML = '';
//     likeCounter.innerHTML += `${likeNumber + 1}`
//     console.log(likeNumber);
// })



