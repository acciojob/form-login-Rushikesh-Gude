function getFormvalue() {
    //Write your code here
	const firstname = document.forms[0].fname.value.trim()
	const lastname = document.forms[0].lname.value.trim()

	alert(firstname + lastname);
	return false;
}
