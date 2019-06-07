function GetUsers(){
    //Get all users from the server
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var userList = JSON.parse(this.responseText);
        generateList(userList);
      }
    };
    xhttp.open("GET", "http://localhost:3000/user", true);
    xhttp.send();
}

function generateList(users){
    //Generate a list of users using the data sent from the server

    //empty list before filling
    $('#userList').empty();

    for(var i = 0; i < users.length; i++){
      
        const li = '<li class="list-group-item" style="height:250px" id="id'+ users[i].id+'"></li>';
        $('#userList').append(li);

        const jsonOutput = '<pre id="json-'+users[i].id+'">' + JSON.stringify(users[i],undefined, 2 ) + '</pre>';
        const deleteButton = '<button id="deleteBtn" onclick="DeleteUser('+users[i].id+')" class="deleteBtn btn btn-danger float-right">Delete</button>';
        const updateButton = '<button id="updateBtn" onclick="SwapForm('+users[i].id+')" class="updateBtn btn btn-info float-left ">Update</button>';
        $('#id'+users[i].id).append(jsonOutput, deleteButton, updateButton);   
    }

}