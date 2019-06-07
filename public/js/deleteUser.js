function DeleteUser(id) {
    if(confirm("Are you sure you want to delete this user?  ")){
    console.log("DELETE USER: [" + id + ']');
    var object = {id: id};
    const options = {
        method: "delete",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    }
    fetch("/user", options);

   GetUsers();
}
}