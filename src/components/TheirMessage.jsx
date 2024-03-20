const TheirMessage = ({ lastMessage, message }) => {
    
    //telling if the last message was by the user, returning a boolean value. 
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    
    return (
        <div className="message-row">
            {
                isFirstMessageByUser && (
                    <div 
                        className="message-avatar"
                        style={{backgroundImage: `$url(${message?.sender?.avatar})`}}
                    />
                )
            }

            { //checking if the message is an attachment or not
                message?.attachments?.length > 0
                    ?(
                        <img 
                            src={message.attachments[0].file}
                            alt="message-attachment"
                            className="message-image"
                            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                        />
                    ) : ( //the messages are sent by somebody else
                        <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                            {message.text}
                        </div>
                    )              
            }
        </div>
    );
}

export default TheirMessage;