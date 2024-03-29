// import { useState } from "react"; 
// import { sendMessage, isTyping } from 'react-chat-engine';
// import { SendOutlined, PictureOutlined } from '@ant-design/icons';

// const Messageform = (props) => {

//     const [value, setValue] = useState('');
//     const { chatId, creds } = props;

//     const handleSubmit = (event) => {
//         event.preventDefault(); //this is going to ensure to not do a browser refresh once the form is submitted. 

//         const text = value.trim();

//         if(text.length > 0){
//             sendMessage(creds, chatId, { text });
//         }

//         setValue('');
//     }

//     const handleChange = (event) => {
//         setValue(event.target.value);

//         isTyping(props, chatId);
//     }

//     const handleUpload = (event) => {
//         sendMessage(creds, chatId, { files: event.target.files, text: '' })
//     }
    
//     return (
//         //jsx form layout
//         <form className="message-form" onSubmit={handleSubmit}>
//             <input 
//                 className="message-input"
//                 placeholder="Send a message ..."
//                 value={value}
//                 onChange={handleChange}
//                 onSubmit={handleSubmit}
//             />
//             <label htmlFor="upload-button">
//                 <span className="image-button">
//                     <PictureOutlined className="picture-icon" />
//                 </span>
//             </label>
//             <input type="file" 
//                 multiple={false}
//                 id="uploadButton"
//                 style={{ display: 'none' }}
//                 onChange={handleUpload}
//             />
//             <button type="submit" className="send-button">
//                 <SendOutlined className="send-icon" />
//             </button>
//         </form>
//     );
// };

// export default Messageform;


import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) {
        sendMessage(creds, chatId, { text });
        }

        setValue('');
    };

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
        <input
            className="message-input"
            placeholder="Send a message..."
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
        <label htmlFor="upload-button">
            <span className="image-button">
            <PictureOutlined className="picture-icon" />
            </span>
        </label>
        <input
            type="file"
            multiple={false}
            id="upload-button"
            style={{ display: 'none' }}
            onChange={handleUpload.bind(this)}
        />
        <button type="submit" className="send-button">
            <SendOutlined className="send-icon" />
        </button>
        </form>
    );
};

export default MessageForm;