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
        const data = snapshot.val();
        console.log(data);
    });
}

// submitPost();
getPosts();