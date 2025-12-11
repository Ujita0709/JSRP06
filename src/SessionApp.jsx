import { useState } from "react";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// sessionStorage に紐づいた atom
const sessionAtom = atomWithStorage("loginUser", "", {
  getItem: (key) => sessionStorage.getItem(key),
  setItem: (key, value) => sessionStorage.setItem(key, value),
  removeItem: (key) => sessionStorage.removeItem(key),
});

// ログインフォーム
function LoginForm() {
  const [, setLoginUser] = useAtom(sessionAtom);
  const [inputName, setInputName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!inputName) return;
    setLoginUser(inputName); // ここで sessionAtom に保存（ sessionStorage にも保存）
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>
          ユーザー名：
          <input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">ログイン</button>
    </form>
  );
}

// ログイン後の表示
function UserInfo() {
  const [loginUser, setLoginUser] = useAtom(sessionAtom);

  const handleLogout = () => {
    setLoginUser(""); // 空文字を入れる → ログアウト状態に
    // または sessionStorage.removeItem("loginUser") を使う実装でもOK
  };

  return (
    <div>
      <p>{loginUser} さんとしてログイン中</p>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
}

// アプリ全体
function SessionApp() {
  const [loginUser] = useAtom(sessionAtom);

  return (
    <div>
      <h1>Jotai + sessionStorage ログインサンプル</h1>

      {/* loginUser が空かどうかで出し分け */}
      {loginUser ? <UserInfo /> : <LoginForm />}
    </div>
  );
}

export default SessionApp;
