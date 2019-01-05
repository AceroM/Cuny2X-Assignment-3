console.log('script loaded...');

function submitHandler() {
    if (document.getElementById("pwd").value !== "12345678") {
        alert("wrong password");
        document.getElementById("valid").innerText = "Wrong Password!"
        document.getElementById("valid").style.color = "red";
    }
    else {
        document.getElementById("valid").innerText = "Logged in Successfully!"
        document.getElementById("valid").style.color = "green";
    }
}