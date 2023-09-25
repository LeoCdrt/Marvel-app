// fetch the data from the server
fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    console.log("Response", response);

    if(!response.ok) {
        if(response.status === 404)
            throw new Error("The server responded with a 404 error");
        else
            throw new Error("The server responded with an error");

    }else {
        return response.json();
    }
}).then((users) => {
    console.log("Users", users);
    // add a new row for each user
    users.forEach((user) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerText = user.name;
        const td2 = document.createElement("td");
        td2.innerText = user.username;
        const td3 = document.createElement("td");
        td3.innerHTML = '<a href="mailto:' + user.email + '">' + user.email + '</a>';
        // td3.innerHTML = `<a href="mailto:${user.email}">${user.email}</a>`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.querySelector("tbody").appendChild(tr);
    });
}).catch((error) => {
    console.log("Error", error);
    // add a row with error message
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = error.message;
    tr.appendChild(td);
    document.querySelector("tbody").appendChild(tr);

});
