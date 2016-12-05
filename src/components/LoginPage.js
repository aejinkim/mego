import React from 'react';
import {Link} from 'react-router';
import '../styles/login-page.css';

// Since this component is simple and static, there's no parent container for it.
const LoginPage = () => {
  return (
    <div>
      <h2 className="alt-header">여긴로그인페이지 입니다. </h2>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
    </div>
  );
};

export default LoginPage;
