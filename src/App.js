import "./styles.css";
import Avatar from "@mui/material/Avatar";

export default function App() {
  return (
    <div className="App">
      <form>
        <div class="imgcontainer">
          <Avatar
            sx={{ height: "70px", width: "70px" }}
            src="/broken-image.jpg"
          />
        </div>
        <div className="login">
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
