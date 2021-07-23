const getMessages = () => {
const messagesRef = firebase.database().ref();
messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
});
}

getMessages()