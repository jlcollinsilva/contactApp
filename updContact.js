var parameterIndex = window.location.search.substr(1);
var contactArr = JSON.parse(localStorage.getItem('contactList'));

if (parameterIndex < 0 || parameterIndex > contactArr.length - 1){
  alert('Contact data invalid..try again!!!!');
  window.location = "homeContact.html";
} else {

    $('#contactName').val(contactArr[parameterIndex].contactName);
    $('#contactPhone').val(contactArr[parameterIndex].contactPhone);
    $('#contactEmail').val(contactArr[parameterIndex].contactEmail);

//Control of the action of Update a Contact

  document.getElementById('btnsaveContact').addEventListener('click',function(){
      event.preventDefault();
    //Name must to have some value....business rule
      if ($('#contactName').val() == "" || $('#contactName').val() == null) {
          alert('You must provide a Name for the Contact');
          document.getElementById('contactName').focus();

        }else if (/\d{3}-\d{3}-\d{4}$/.test($('#contactPhone').val()) == false) {
          alert('Invalid Phone number format, must be 999-999-9999, try again!!!');
          document.getElementById('contactPhone').focus();
        }else if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test($('#contactEmail').val()) == false) {
          alert('Invalid email address format, must be similar to username@domain.com,try again!!!');
          document.getElementById('contactEmail').focus();
        }
        else {

          //var contactArr = new Array();
          var contactAll = "";

          //contactArr = JSON.parse(localStorage.getItem('contactList'));

          contactArr[parameterIndex].contactName = $('#contactName').val();
          contactArr[parameterIndex].contactPhone = $('#contactPhone').val();
          contactArr[parameterIndex].contactEmail = $('#contactEmail').val();

          contactAll = JSON.stringify(contactArr);

          localStorage.setItem('contactList',contactAll);

          alert('Contact updated Sucessfully!!!!');
          window.location = "homeContact.html";
        }
      });

} //end Else Data Invalid

//Control of the action of Cancel the action of Add a new Contact
document.getElementById('btncancelSave').addEventListener('click',function(){

    document.getElementById('formupdContact').reset();
    window.location = "homeContact.html";

});
