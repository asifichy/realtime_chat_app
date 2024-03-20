//Main chatfeed that will customized as my own preferences.

import Messageform from "./MessageForm";
import MyMassage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages} = props;

    //finding current chats
    const chat = chats && chats[activeChat];

    // functional component for generating messages
    const renderMessages = () => {
        const keys = Object.keys(messages);

        // the keys are basically id's of messages

        return keys.map((key, index) => {
            const message = messages[keys];
            const lastMessageKey = index === 0 ? null : keys[index-1]; //ensuring if there are messages then find the last message
            const MyMassage = userName === message.sender.userName;

            return(
                <div key={ `msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage 
                            ? <MyMessage message = {message} /> 
                            : <TheirMessage message = {message} lastMessage = {messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px': '68px' }}>
                        read-receipts
                    </div>
                </div>
            )
        });
    }

    //loading effect
    if(!chat){
        return 'Loading ...';
    }

    return ( //structure of our chat feed
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {
                        chat?.title
                    }
                </div>
                <div className="chat-subtitle">
                    {
                        chat.people.map((person) => ` ${person.person.userName}`)
                    }
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }}>
                    <div className="message-form-container">
                        <Messageform {...props} chatId = {activeChat} />
                    </div>
            </div>
        </div>
    );
}

export default ChatFeed;