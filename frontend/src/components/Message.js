import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    // window.setTimeout(() => {
    //   setVisible(false);
    // }, 4000);
  }, []);

  return (
    <Alert variant={variant} show={visible}>
      {children}
    </Alert>
  );
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
