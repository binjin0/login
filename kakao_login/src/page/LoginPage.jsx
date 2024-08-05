import React from "react";
const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
const K_REDIRECT_URI = "http://localhost:3000/oauth";
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
const LoginPage = () => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <div>
      <button onClick={handleKakaoLogin}>카카오톡 로그인</button>
    </div>
  );
};

export default LoginPage;
