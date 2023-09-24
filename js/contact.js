function sendEmail() {
    Email.send({
        SecureToken: "01f78ace-feb7-493a-afcd-98ed7359adea",
        To: "mcn007minh@gmail.com",
        From: "mcn007minh@gmail.com",
        Subject: "New Contact From Personal Website",
        Body: "Name: " + document.getElementById("name").value +
        "<br>Email: " + document.getElementById("email").value +
        "<br>Subject: " + document.getElementById("subject").value
    }).then(
        message => alert("Email has been sent")
    );
}