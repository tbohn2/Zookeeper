const newName = (event) => {
    event.preventDefault()
    const name = document.querySelector('#newPokehome').value
    console.log(name);
    createZoo(name)
}

const createZoo = async (name) => {
    req = `[{"name": "${name}"}]`
    const response = await fetch('/api/dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: req
    });
    if (response.ok) {
        const res = async (response) => {
            const data = await response.json()
            console.log(data.id);
            const id = data.id
            document.location.replace('/' + id);
        }
        res(response)

    } else {
        alert(response.statusText);
    }
}

const pokehomecards = document.querySelectorAll('.pokehomecard')

pokehomecards.forEach(function (pokehomecard) {
    pokehomecard.addEventListener('click', function (event) {
        event.preventDefault();
        const zooName = pokehomecard.querySelector('#title').innerText;
        console.log(zooName);
    });
});

const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#createbtn').addEventListener('click', newName);
document.querySelector('#logoutbtn').addEventListener('click', logout);