import React, { useState } from "react";
import { styled } from "styled-components";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const idChangeHandler = (e) => {
    const inputValue = e.target.value;
    console.log("id" + inputValue);
    setUserId(inputValue);
  };
  const passwordChangeHandler = (e) => {
    const inputValue = e.target.value;
    console.log("pw" + inputValue);
    setPassword(inputValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.userId.value);
    // console.log(e.target.password.value);
    const userId = e.target.userId.value;
    const password = e.target.password.value;
    const loginData = {
      userId,
      password,
    };
    // const submitLoginData = 뭔가통신하는customHooks(loginData);
  };

  return (
    <>
      <LoginBody>
        <LoginComponent>
          <FormDiv>
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div>
                <label htmlFor=''>
                  <input type='text' name='userId' id='userId' value={userId} onChange={(e) => idChangeHandler(e)} />
                  <label htmlFor=''></label>
                </label>
              </div>
              <div>
                <label htmlFor=''>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={passwordChangeHandler}
                  />
                  <label htmlFor=''></label>
                </label>
              </div>
              <button>로그인</button>
              <div>
                <div>
                  <input type='checkbox' name='' id='' />
                  <label htmlFor=''></label>
                </div>
                <a href='#!'>asd</a>
              </div>
            </form>
          </FormDiv>
          <JoinInfoDiv>
            <div>
              Netflix 회원이 아닌가요?
              <a href='/'>지금 가입하세요</a>.
            </div>
            <div class='recaptcha-terms-of-use' data-uia='recaptcha-terms-of-use'>
              <p>
                <span>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</span>&nbsp;
                <button class='recaptcha-terms-of-use--link-button' data-uia='recaptcha-learn-more-button'>
                  자세히 알아보기.
                </button>
              </p>
              <div class='recaptcha-terms-of-use--disclosure' data-uia='recaptcha-disclosure'>
                <span id='' data-uia='recaptcha-disclosure-text'>
                  Google reCAPTCHA가 수집하는 정보에는 Google{" "}
                  <a href='https://policies.google.com/privacy'>개인정보처리방침</a>과{" "}
                  <a href='https://policies.google.com/terms'>서비스 약관</a>이 적용되며, 해당 정보는 reCAPTCHA 서비스
                  제공, 관리 및 개선과 일반적인 보안 유지에 사용됩니다(Google의 개인 맞춤 광고에 사용 안 함).
                </span>
              </div>
            </div>
          </JoinInfoDiv>
        </LoginComponent>
      </LoginBody>
    </>
  );
};

export default Login;

const LoginBody = styled.div`
  margin: 0 auto -236px;
  max-width: 450px;
  min-height: 100vh;

  @media (max-width: 740px) {
    margin: 0 auto;
    padding: 0;
    min-width: 100vw;
    min-height: 0;
  }
`;

const LoginComponent = styled.div`
  background-color: tomato;
  height: 660px;
  padding: 60px 68px 40px;
  margin-bottom: 90px;

  @media (max-width: 740px) {
    background-color: skyblue;
    height: 550px;
    padding: 20px 5% 30px;
    margin: 0;
  }
`;

const FormDiv = styled.div`
  padding: 20px;
`;

const JoinInfoDiv = styled.div`
  padding: 20px;
`;
