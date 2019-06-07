function CreateUser(){

    const formEmail = $('#email').val();
    const formForeName = $('#forename').val();
    const formSurname = $('#surname').val();

    const data = {
        email: formEmail,
        foreName: formForeName,
        surname: formSurname
    }


    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch("/user", options);
    console.log("New user created");
    GetUsers();
}
