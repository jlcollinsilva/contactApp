function showContact(i) {
var contactArr = JSON.parse(localStorage.getItem('contactList'));

$('#contactName').val(contactArr[i].contactName);
$('#contactPhone').val(contactArr[i].contactPhone);
$('#contactEmail').val(contactArr[i].contactEmail);
}
