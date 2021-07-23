

const submitPost = () => {
    const usernameRef = document.querySelector("#username");
    const messageRef = document.querySelector("#message");

    const username = usernameRef.value;
    const message = messageRef.value;

    // const username = "testUser";
    // const message = "testMessage#testHashtag";
    const date = new Date();

    const split = message.split("#");
    const hashtags = split.slice(1, split.length).map(e => e.split(" ")[0]);
    if (message == "" || username == "") {
        return
    }
    usernameRef.value = "";
    messageRef.value = "";
    firebase.database().ref().push({
        date: (1 + date.getMonth()) + "/" + date.getDate() + "/" + date.getFullYear(),
        username: username,
        message: message,
        hashtags: hashtags,
    });
    console.log("Submitted post!");

};

const getPosts = () => {
    const messagesRef = firebase.database().ref();
    console.log(firebase.database());
    messagesRef.on('value', (snapshot) => {
        const posts = document.querySelector('#posts');
        posts.innerHTML = '';
        const data = snapshot.val();
        for (let i in data) {
            console.log(data[i]);
            posts.innerHTML += generateCard(data[i].username, data[i].message, data[i].date)
        }
    });


}
//  submitPost();
getPosts();
const generateCard = (username, message, date) => {
    return ` <li id="individualpost">
                 <h3 class="individualpost--username">@ ${username}</h3>
                 <h4 class="date">${date}</h4>
                 <div class="hr"></div>
                <h3 class="individualpost--message">${message}!</h3>
            </li>`
}