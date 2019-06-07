
var showing = false;


function UpdateUser(id){

    console.log("Updated user: [" + id + "]");
    var newEmail = $("#updateEmail").val();
    var newForename = $("#updateForename").val();
    var newSurname = $("#updateSurname").val();

    var data = {
        id: id,
        email: newEmail,
        forename: newForename,
        surname: newSurname
    }
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch("/user", options);
    SwapForm();
    GetUsers();

}

function SwapForm(id){
    //Toggles the update form to appear
    

    if(id != null){
    //takes the user data and automatically fills the update fields
    const formData = $('#json-'+id).text();
    const jsonFormData = JSON.parse(formData);

    FillFormWithPreviousData(jsonFormData);
    }

    $("#submitUpdateBtn").attr("onclick", "UpdateUser("+id+")");
    var updateElement = $('#form-container');
    var createElement = $('#createUserForm');

    if(!showing){
        // If update form is not showing
        updateElement.removeClass("hidden");
        updateElement.addClass('showing');
        $("#email").attr('disabled','disabled');
        $("#forename").attr('disabled','disabled');
        $("#surname").attr('disabled','disabled');
        $("#submitBtn").attr('disabled','disabled');
     
        showing = true;
    }else{
        //If update form is shwoing.
        updateElement.removeClass("showing");
        updateElement.addClass('hidden');
        $("#forename").removeAttr("onclick");
        createElement.removeClass('hidden');
        createElement.addClass('showing');
        $("#email").removeAttr("disabled");
        $("#forename").removeAttr("disabled");
        $("#surname").removeAttr("disabled");
        $("#email").attr('enabled','true');
        $("#forename").attr('enabled','true');
        $("#surname").attr('enabled','true');
        $('#submitBtn').removeAttr("disabled");
        showing = false;
    }
  
}


function FillFormWithPreviousData(data){
    $('#updateEmail').val(data.email);
    $('#updateForename').val(data.forename);
    $('#updateSurname').val(data.surname);
}