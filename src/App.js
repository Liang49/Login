import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <div className="login">
          <h1>Login</h1>
          <label>Username</label>
          <input type="text" name="name" placeholder="Username or Email" />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="text" name="password" placeholder="Password" />
        </div>
        <button>Sign in</button>
        <div>Forgot password</div>
      </form>
    </div>
  );
}
