import { ChatEngine } from 'react-chat-engine';
import { ChatFeed } from './components/ChatFeed';

import './App.css';

//app component will be a simple app component
//and it'll have just one return statement. Calling the chat engine which is basically a component.
const App = () => { 
    return (
        <ChatEngine 
            height = "100vh"
            projectID = "7115d3c2-6564-4cc5-9ac7-6f4095c5ed0b"
            userName = "asifniloy"
            userSecret = "123123"

            //rendering my own chat props
            renderChatFeed = {(ChatAppProps) => <ChatFeed { ...ChatAppProps} />} 
        />
    );
}

export default App;