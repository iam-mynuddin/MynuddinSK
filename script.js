
function sendEmail() {
	var digits = '0123456789';
	let x = '';
	for (let i = 0; i < 4; i++) {
		x += digits[Math.floor(Math.random() * 10)];
	}
	let mail = "iammynuddin@gmail.com";
	mail = String(mail)
	var email_body = 'Your OTP is ' + x + '. This is valid for 10 minutes only !!';
	Email.send({
		Host: "smtp.gmail.com",
		Username: "otpmachine004@gmail.com",
		Password: "123@abcd",

		To: mail,
		From: "otpmachine004@gmail.com",
		Subject: "OTP verification code from Shaik Mynuddin",
		Body: email_body
	})
		.then(message => {

			if (message == 'OK') {
				alert('Your OTP has been send. Please verify within 10 minutes');
			}
			else {
				console.error(message);
				alert('Error occured while sending OTP ');
			}
		})
	
	if (mail == "") {
	}
	else {
	}

	return false;
};

function verifyOTP() {
	var otp = document.getElementById("otp").value;
	if (otp == "") {
		document.getElementById("message").innerHTML = "OTP cannot be blank !"
		//document.getElementById("message").innerHTML = x; //used to check the generated OTP 

		return false;
	}

	if (otp == x) {
		document.getElementById("message_succes").innerHTML = "OTP Validated !";
		document.getElementById("success").innerHTML = "Proceed";
		return false;
	}
	if (otp != x) {
		document.getElementById("message").innerHTML = "Invalid OTP !!";
		return false;
	} else {
		alert("OTP is not validated");
	}
}  
