//Control of the action of Add a new Contact
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
     } else {

    // construct the table record
   var contact = {contactName:$('#contactName').val(),
                contactPhone:$('#contactPhone').val(),
                contactEmail:$('#contactEmail').val()};

   var contactArr = new Array();
   var contactAll = "";

   if (localStorage.getItem('contactList')==null) { //first time
     contactArr.push(contact);
     contactAll = JSON.stringify(contactArr);
   }
   else {
     contactArr = JSON.parse(localStorage.getItem('contactList'));
     contactArr.push(contact);
     contactAll = JSON.stringify(contactArr);
   }

   localStorage.setItem('contactList',contactAll);

   alert('Contact saved Sucessfully!!!!');
   window.location = "homeContact.html";
}
});


//Control of the action of Cancel the action of Add a new Contact
document.getElementById('btncancelSave').addEventListener('click',function(){

    document.getElementById('formaddContact').reset();
    window.location = "homeContact.html";

});
