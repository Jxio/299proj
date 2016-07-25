/**
 * Tyler Harnadek on 2016-07-24.
 */

// globals
var userName   = null;
var passWord   = null;
var passWordRe = null;
var userID     = null;


$('#login').submit(function() {

    // get all the inputs into an array.
    var $inputs = $('#login :input');
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
	console.log(values);
	
	userName =  values.userName;
	passWord =  values.pw;
	// Literally log the password in the console for maximum insecurity
	console.log(userName);
	console.log(passWord);
	if(!passWord || !userName){
		// Do a bad thing here if the user is too lazy to enter credentials
		alert("Password or username field left blank");
		return;
	}

	// THIS NEEDS TO BE ADAPTED TO A LOGIN REQUEST
	$.post(
		"/user/login",
		{
			"userName": userName,
			"PwHash": hash(passWord),
		}, function(data, textStatus) {
			if (textStatus !== 'success') {
				alert('Failed to login.');
				console.log("Login failed. Status: " + textStatus);
			}
		}
	); 
	

});


$('#register').submit(function() {

    // get all the inputs into an array.
    var $inputs = $('#register :input');
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
	console.log(values);
	
	userName =  values.userName;
	passWord =  values.pw;
	passWordRe= values.re_pw;
	// Literally log the password in the console for maximum insecurity
	console.log(userName);
	console.log(passWord);
	if(!passWord || !userName){
		// Do a bad thing here if the user is too lazy
		alert("Password or username field left blank");
		return;
	}
	if(passWord != passWordRe ){
		// Do a bad thing here if the password fields don't match
		alert("Passwords do not match, try again");
		return;
	}
	$.post(
		"/user/new",
		{
			"userName": userName,
			"PwHash": hash(passWord),
		}, function(data, textStatus) {
			if (textStatus !== 'success') {
				alert('Failed to login.');
				console.log("Login failed. Status: " + textStatus);
			}
		}
	); 
	

});

function hash(string){
	//TODO: use better algo!!!! this is sdbm
	var hash = 0;
	var c;
	for(c = 0; c < string.length ; c++){
		hash = string.charCodeAt(c) + (hash<<6)+(hash<<16)-hash;
	}
	return hash;
}


function init() {

    console.log("Initalizing Page...");

}

init();