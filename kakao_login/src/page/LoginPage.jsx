import React from "react";
import { useEffect } from "react";
// const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
// const K_REDIRECT_URI = "http://localhost:3000/oauth";
const K_JS_API_KEY = process.env.REACT_APP_K_JS_API_KEY;
// const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
const LoginPage = () => {
  useEffect(() => {
    // 카카오 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(K_JS_API_KEY); // 카카오 JavaScript 키로 초기화
    }
  }, []);
  const handleLogin = async () => {
    try {
      await new Promise((resolve, reject) => {
        window.Kakao.Auth.login({
          success: resolve,
          fail: reject,
        });
      });

      const response = await new Promise((resolve, reject) => {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: resolve,
          fail: reject,
        });
      });

      const { id, kakao_account } = response;
      const { profile } = kakao_account;

      const userData = {
        id: id,
        nickname: profile.nickname,
        profile_image: profile.profile_image_url,
      };
      console.log(userData);

      const result = await fetch("http://your-backend-api.com/kakao-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await result.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>카카오톡 로그인</button>
    </div>
  );
};

export default LoginPage;
