function displayMessage() {
    let name = document.getElementById("name-field").value 
    console.log(name)
    document.getElementById("message").innerHTML = name

    return false;
}