import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function LoginButton() {
  //const history = useHistory(); 이 부분 해결 중

  const handleClick = () => {
    // 로그인 페이지로 이동
    //history.push('/login');
  };

  return (
    <Button variant="primary" className="ml-2" onClick={handleClick}>
      Login
    </Button>
  );
}

export default LoginButton;

