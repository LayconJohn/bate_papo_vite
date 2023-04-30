import { PrettyChatWindow } from 'react-chat-engine-pretty';

export default function ChatsPage({ user }) {
    
    return(
        <PrettyChatWindow
        projectId={process.env.PROJECT_ID}
        username={user.username}
        secret={user.secret}
        style={{ height: '100vh' }}
      />
    );
};