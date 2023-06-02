const newName = (event) => {
    event.preventdefault()
    const name = event.target.getElementByID('title').innertext
    console.log(name);
    // createZoo(name)
}

const createZoo = async (name) => {
    const response = await fetch('/api/pokezoo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(name)
    });
    if (response.ok) {
        // Relocate to Christopher's page
        document.location.replace('/' + name);
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

document.querySelector('#logoutbtn').addEventListener('click', logout);