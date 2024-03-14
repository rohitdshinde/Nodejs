async function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;

    const person = {
        name,
        email,
        city
    }

    const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    })
    if(response.status===201) alert('Form Submitted Sucessfully !');
}