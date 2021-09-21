function update_text() {
    var userText = document.getElementById("user-text");
    var memeText = document.getElementById("meme-text")
    memeText.innerHTML = userText.value;
}