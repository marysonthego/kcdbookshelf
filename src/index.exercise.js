// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from "react";
import { createRoot } from "react-dom/client";
// 🐨 you'll also need to import the Logo component from './components/logo'
import { Logo } from "./components/logo";
// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export const App = () => {
  const [openModal, setOpenModal] = React.useState("none");

  return (
    <div>
      <div>
        <Logo width="80" height="80" />
        <h1>Bookshelf</h1>
      </div>
      <div>
        <button name="Login" onClick={() => setOpenModal("login")}>
          Login
        </button>
      </div>
      <div>
        <button name="Register" onClick={() => setOpenModal("register")}>
          Register
        </button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === "login"}>
        <h3>Login</h3>
        <div>
          <button onClick={() => setOpenModal("none")}>Close</button>
        </div>
      </Dialog>
      <Dialog aria-label="Registration Form" isOpen={openModal === "register"}>
        <h3>Register</h3>
        <div>
          <button onClick={() => setOpenModal("none")}>Close</button>
        </div>
      </Dialog>
    </div>
  );
};

// 🐨 use createRoot to render the <App /> to the root element
const root = createRoot(document.getElementById("root"));

// 💰 find the root element with: document.getElementById('root')
root.render(<App />);
export { root };
