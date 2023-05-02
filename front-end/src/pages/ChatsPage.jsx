import { PrettyChatWindow } from 'react-chat-engine-pretty';

export default function ChatsPage({ user }) {
    
    return(
      <div className="chatBoard" > 
        <PrettyChatWindow
          projectId={"f8f71cbd-27ac-45fa-8a6e-bc988ddd9b89"}
          username={user.username}
          secret={user.secret}
          style={{ height: '100vh' }}
        />
      </div>
    );
};