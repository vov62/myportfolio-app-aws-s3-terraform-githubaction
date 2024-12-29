import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const SupportAdmin = () => {
  return (
    <ChatEngine
      projectID={process.env.REACT_APP_PRIVATE_ID}
      userName='nave'
      userSecret='123456'
      height='calc(100vh-20px)'

    />
  );
}

export default SupportAdmin;
