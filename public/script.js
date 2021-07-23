const submitMessage = () => {
    // const passcodeInput = document.querySelector('#tweet').value;
    // const messageInput = document.querySelector('#message').value;
    
    firebase.database().ref().push({
        passcode: 'Hello',
        message: 'hi'
    });
};

const getMessages = () => {
const messagesRef = firebase.database().ref();
messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
});

submitMessage();
getMessages()