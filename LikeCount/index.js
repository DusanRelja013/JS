let posts = [{
        text: 'Kockice',
        postImg: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        likes: 0,
        comments: ['komentar..']
    },
    {
        text: 'Super Mario',
        postImg: 'https://purepng.com/public/uploads/large/purepng.com-mariomariofictional-charactervideo-gamefranchisenintendodesigner-1701528634653vywuz.png',
        likes: 0,
        comments: ['komentar..']
    },
    {
        text: 'Pingvin',
        postImg: 'https://i.stack.imgur.com/ILTQq.png',
        likes: 0,
        comments: ['komentar..']
    }
]

const divPosts = document.querySelector('#posts')

function repaint(posts) {
    divPosts.innerHTML = ''
    posts.sort((a, b) => b.likes - a.likes)

    posts.forEach(post => {

        const p = document.createElement('p')
        p.textContent = post.text

        const img = document.createElement('img')
        img.src = post.postImg

        const likes = document.createElement('div')
        const pLike = document.createElement('p')
        pLike.textContent = post.likes
        const btnLike = document.createElement('button')
        btnLike.textContent = 'Like'
        btnLike.addEventListener('click', () => {
            post.likes++
                repaint(posts)
        })
        likes.append(pLike, btnLike)

        const divCom = document.createElement('div')
        divCom.textContent = post.comments
        inputComm = document.createElement('input')
        inputComm.type = 'text'
        inputComm.addEventListener('keypress', (e) => {
            if (e.key == 'Enter') {
                if (e.target.value.trim() != '') {
                    post.comments.push(e.target.value.trim())
                    repaint(posts)
                } else {
                    const p = document.createElement('p')
                    p.textContent = 'greska'
                    e.target.parentElement.appendChild(p)
                }
            }
        })
        divCom.appendChild(inputComm)

        const divPost = document.createElement('div')
        divPost.className = 'post'
        divPost.append(p, img, likes, divCom)
        divPost.addEventListener('mouseenter', () => {
            divPost.classList.remove('zoomout')
            divPost.classList.add('zoom')
        })
        divPost.addEventListener('mouseleave', () => {
            divPost.classList.remove('zoom')
            divPost.classList.add('zoomout')
        })

        divPosts.appendChild(divPost)
    })

}

repaint(posts)

const search = document.querySelector('#search')
search.addEventListener('input', (e) => {
    repaint(posts.filter(el => el.text.includes(e.target.value)));
})