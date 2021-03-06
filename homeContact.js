//Control of the action of Add a new Contact
document.getElementById('btnaddContact').addEventListener('click',function(){
    window.location = "addContact.html";
});

document.getElementById('btnsearchContact').addEventListener('click',function(){
    searchContacts();
});

$('body').on('click', 'button.btndelete', function() {
    // do something
    window.location = "deleteContact.html?"+this.id.substr(4);
});

$('body').on('click', 'button.btnupdate', function() {
    // do something
    window.location = "updateContact.html?"+this.id.substr(4);
});

$('#searchId').val(sessionStorage.getItem('lastSearch'));

if ($('#searchId').val() !== "" && $('#searchId').val !== null) {
  searchContacts();
  }


//Logical for read all the movies and show them on the webpage
function searchContacts(){

  if (localStorage.getItem("contactList") !== null) {

      sessionStorage.setItem('lastSearch',$('#searchId').val());

      var contactString = localStorage.getItem('contactList');
      var contactObj = JSON.parse(contactString);

      // Using a for loop
      var filtered = [];
      var item;
      for (var k = 0; k < contactObj.length; ++k) {

          if (contactObj[k].contactName.search(sessionStorage.getItem('lastSearch')) > -1) {
             item = {contactName:contactObj[k].contactName,
                    contactPhone:contactObj[k].contactPhone,
                    contactEmail:contactObj[k].contactEmail,
                    contactIndex:k};
              filtered.push(item);
                  }
          }

      var recordContact = '<tr><th>Name</th><th>Phone</th><th>Email</th><th>Actions</th></tr>';

      for (var i = 0; i < filtered.length; i++) {
        recordContact += '<tr>'+
                    '<td>'+filtered[i].contactName + '</td>' +
                    '<td>'+filtered[i].contactPhone + '</td>' +
                    '<td>'+filtered[i].contactEmail + '</td>' +
                    '<td> <button class= \'btn btn-success btn-sm btnupdate \' id= \'bUpd' + String(filtered[i].contactIndex) + ' \' ' +
                                    '> <span class=" glyphicon glyphicon-edit" aria-hidden="true"></span> '+
                                    'Change </button>  <button class= \'btn btn-danger btn-sm btndelete \' id= \'bDel' + String(filtered[i].contactIndex) + ' \' ' +
                                            '> <span class=" glyphicon glyphicon-remove-sign" aria-hidden="true"></span> '+
                                            'Delete </button> </td>' +
                    '</tr>';
                  }

    $('#tableContact').html(recordContact);
    };
  };
