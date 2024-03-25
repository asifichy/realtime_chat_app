/* eslint-disable no-unused-vars */
//Main chatfeed that will customized as my own preferences.

import MyMessage from './MessageForm';
import TheirMessage from './TheirMessage';
import Messageform from './MessageForm';


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    //finding current chats
    const chat = chats && chats[activeChat];

    //rendering  read receipts
    const renderReadReceipts = (message, IsMyMessage) => {
        //this means this id read message
        chat.people.map((person, index) => person.last_read === message.id && (
            //only if the person read the message
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: IsMyMessage ? 'right' : 'left',
                    backgroundImage: `$url(${person?.person?.avatar})`
                }}
            />
        )) 
    }



    // functional component for generating messages
    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1]; //ensuring if there are messages then find the last message
            const IsMyMessage = userName === message.sender.userName;


            return (
                <div key={`msg_&{index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            IsMyMessage 
                            ? <MyMessage message = {message} />
                            : <TheirMessage message = {message} lastMessage = {messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: IsMyMessage ? '18px' : '0px', marginLeft: IsMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, IsMyMessage)}
                    </div>
                </div>
            )
        })
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
                        chat.people.map((person) => ` ${person.person.userName}`) //template string
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
