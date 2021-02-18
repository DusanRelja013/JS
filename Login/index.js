const users = [{
        username: 'admin',
        password: 'admin',
        isAdmin: true
    },
    {
        username: 'John',
        password: '123456',
        isAdmin: false,
        coins: 7
    },
    {
        username: 'Kelly',
        password: 'asdf1234',
        isAdmin: false,
        coins: 12
    },
    {
        username: 'Pera',
        password: '1234asdf',
        isAdmin: false,
        coins: 42
    },
    {
        username: 'Ana',
        password: 'fghfhf',
        isAdmin: false,
        coins: 31
    }
]

const divUsers = document.querySelector('#users')
const forma = document.querySelector('#login')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const logoutButton = document.querySelector('#logout')

users.forEach(user => {
        if (user.isAdmin) return

        const p = document.createElement('p')
        p.textContent = user.username + ' ' + user.coins

        divUsers.append(p)
    })
    // '    gdfg  dfsfs    '
    // 'gdfg  dfsfs'

// '           '
// ''

function ulogujSe() {
    forma.classList.add('hide')
    divUsers.classList.remove('hide')
    logoutButton.classList.remove('hide')
}

function registrujSe(username, password) {
    users.push({
        username: username,
        password: password,
        isAdmin: false,
        coins: 0
    })
    const p = document.createElement('p')
    p.textContent = username + ' ' + 0
    divUsers.append(p)
}

const invalidInput = () => usernameInput.value.trim().length === 0 || passwordInput.value.trim() === ''

forma.addEventListener('submit', e => {
    e.preventDefault()
        // Ни један инпут не сме бити празан (не сме садржати ни само белине (space,tab))
    if (invalidInput()) {
        alert('Не сме празан унос')
        return
    }
    // Да ли корисник већ постоји // find, some
    let korisnik = users.find(user => user.username === usernameInput.value)
        // let postoji = false
        // for(let i = 0; i < users.length; i++){
        //     if(users[i].username === usernameInput.value){
        //         postoji = true
        //         break
        //     }
        // }
        // console.log(postoji)

    // Ако постоји, да ли је шифра добра (Ако је добра шифра, улоговати. Иначе, исписати поруку)
    if (korisnik) {
        if (korisnik.password === passwordInput.value) {
            ulogujSe()
        } else console.log('Погрешна шифра')
    }
    // Ако не постоји, направити новог - И улоговати га са тим подацима
    else {
        registrujSe(usernameInput.value, passwordInput.value)
        ulogujSe()
    }

})

logoutButton.addEventListener('click', () => {
    forma.classList.remove('hide')
    divUsers.classList.add('hide')
    logoutButton.classList.add('hide')
    console.log(divUsers.classList)
    let niz = Array.from('dsfsdf')
    console.log(niz)
    console.log(niz.map(el => el + 'hello'))
})