//Control of the action of Add a new Movie
var parameterIndex = window.location.search.substr(1);
var deleteArr = JSON.parse(localStorage.getItem('contactList'));

if (parameterIndex < 0 || parameterIndex > deleteArr.length - 1){
  alert('Contact data invalid..try again!!!!');
  window.location = "homeContact.html";
} else {

    $('#contactName').val(deleteArr[parameterIndex].contactName);
    $('#contactPhone').val(deleteArr[parameterIndex].contactPhone);
    $('#contactEmail').val(deleteArr[parameterIndex].contactEmail);
}

//Control of the Delete confirmation modal
//When the user confirm that he is sure about delete the movie...

document.getElementById('btndelContact').addEventListener('click',function(){
    event.preventDefault();
    var newArr = deleteArr.splice(parameterIndex,1);
    //Update the "Array", actually localStorage
    localStorage.setItem('contactList',JSON.stringify(deleteArr));
    //Update the screen for the user after the record delete..
    alert('Contact deleted Sucessfully!!!!');
    window.location = "homeContact.html";
  });

//Control of the action of Cancel the action of delete a Contact
document.getElementById('btncancelDelete').addEventListener('click',function(){
    document.getElementById('formdelContact').reset();
    window.location = "homeContact.html";
  });
