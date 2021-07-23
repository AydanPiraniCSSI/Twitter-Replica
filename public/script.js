const getPosts = () => {
    console.log("Getting posts!");
}

const submitPost = () => {
    // const usernameRef = document.querySelector("#username").value;
    // const messageRef = document.querySelector("message").value;
    
    // const username = usernameRef.value;
    // const message = messageRef.value;

    const username = "testUser";
    const message = "testMessage#testHashtag";
    const date = new Date();

    const split = message.split("#");
    const hashtags = split.slice(1, split.length).map(e => e.split(" ")[0]);

    // usernameRef.value = "";
    // messageRef.value = "";

    firebase.database().ref().push({
        username: username,
        message: message, 
        hashtags: hashtags, 
        date: date
    });
    console.log("Submitted post!");
}


// const submitMessage = () => {
//     // const passcodeInput = document.querySelector('#tweet').value;
//     // const messageInput = document.querySelector('#message').value;
    
//     firebase.database().ref().push({
//         passcode: 'Hello',
//         message: 'hi'
//     });
// };

// const getMessages = () => {
// const messagesRef = firebase.database().ref();
// messagesRef.on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
// });

submitPost();
// getMessages();