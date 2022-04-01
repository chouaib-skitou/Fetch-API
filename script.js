fetch('server.php').then((res) => res.json())
.then(response => {
    console.log(response)
    let output = '';
    for(let i in response){
        output += `<tr>
            <th scope="row">${response[i].id}</th>
            <td>${response[i].FirstName}</td>
            <td>${response[i].LastName}</td>
            <td>${response[i].PhoneNumber}</td>
        </tr>`;
    }

    document.querySelector('.tbody').innerHTML = output;
}).catch(error => console.log(error));