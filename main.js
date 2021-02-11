const url = 'https://jsonplaceholder.typicode.com/users';

let users = [];
fetch(url)
    .then((resp) => resp.json())
    .then(data => {
        const givenData = data;
        const userData = givenData.map(elem => {
            return { id : elem.id, name : elem.name, companyName: elem.company.name,
                address: `${elem.address.street}, ${elem.address.zipcode} ${elem.address.city}`}
        });
        console.log(userData);
        users = userData;
    })
    .then(data => {
        appendData();
    })


    function appendData() {
        const main = document.getElementById('myUl');
        users.forEach((element) => {
        const container = document.createElement("div");
        const item = document.createElement("div");
        const icon = document.createElement("i");

        const text= document.createTextNode(element.name);
        container.className = 'flex-item';
        // item.className = 'flex-item';
        icon.className = 'fas fa-laptop-code fa-4x'

        main.append(icon, container);
        container.append(item);
        item.append(icon, text);
    })
}

