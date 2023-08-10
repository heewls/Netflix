import { auth, storage } from "../firebase/firebase";
import { get } from "firebase/database";
import { ref, getDownloadURL } from "firebase/storage";
import { getRdbRequest, postRdbRequest } from "../utils/firebase.api";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const FirebaseTest = () => {
  const [user, setUser] = useState({});
  // //storage get 예제
  // // 파일에 대한 참조를 가져온다
  // const starsRef = ref(storage, "test-video.mp4");

  // //url을 통해 다운로드한다
  // getDownloadURL(starsRef).then((url) => {
  //   console.log(url);
  // });

  // // storage get images
  // const storageRef = ref(storage);
  // const imagesRef = ref(storageRef, "images");
  // const data = [1, 2, 3, 4];
  // const dbData = [];
  // data.forEach((v) => {
  //   getDownloadURL(ref(imagesRef, `thumbs${v}.jpg`))
  //     .then((url) => {
  //       // `url` is the download URL for 'images/stars.jpg'
  //       dbData.push(url);
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //     });
  // });

  // // realtime database 예제
  // useEffect(() => {
  //   // 호출할 url 생성
  //   const url = `users/4`;
  //   const data = getRdbRequest(url);
  //   setUser(data);
  // }, []);

  const onClickHandler = () => {
    // signUp();
    // localStorage.removeItem("accessToken");
    // signIn();
    console.log(user);
  };

  // //인증 예제
  // const email = "3login@login.login";
  // const password = "loginlogin";

  // //가입
  // const signUp = createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log(user);
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage);
  //     // ..
  //   });

  // // 로그인
  // const signIn = () => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       localStorage.setItem("accessToken", user.accessToken);
  //       console.log(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  return (
    <>
      <div>FirebaseTest</div>
      <div>FirebaseTest</div>
      <button onClick={onClickHandler}>button</button>
    </>
  );
};

export default FirebaseTest;
