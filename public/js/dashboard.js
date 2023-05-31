const newName = (event) => {
    event.preventdefault()
    const name = event.target.getElementByID('title')
    createZoo(name)
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

const loadZoo = async (event) => {
    event.preventdefault()
    const name = await event.target.getElementByID('title')
    // Relocate to Christopher's page
    document.location.replace('/' + name);
}






document.querySelector('.pokehomecard').addEventListener('click', newName);
document.querySelector('#logoutbtn').addEventListener('click', loadZoo);

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