import { useState } from "react";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main-container" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <div>
        <div className="container">
          <div className="container-login">
            <div className="wrap-login">
              <form className="login-form">
                <span className="login-form-title"> Cadastro Professores</span>
                <span className="login-form-title">
                </span>
                <div className="wrap-input">
                  <input
                    className={email !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Professor"></span>
                </div>
                <div className="container-login-form-btn">
                  <button className="login-form-btn">CADASTRAR</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="container-login">
            <div className="wrap-login">
              <form className="login-form">
                <span className="login-form-title"> Cadastro Disciplina</span>
                <span className="login-form-title">
                </span>
                <div className="wrap-input">
                  <input
                    className={email !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Disciplina"></span>
                </div>
                <div className="container-login-form-btn">
                  <button className="login-form-btn">CADASTRAR</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="container-login">
            <div className="wrap-login">
              <form className="login-form">
                <span className="login-form-title"> Cadastro Turma</span>
                <span className="login-form-title">
                </span>
                <div className="wrap-input">
                  <input
                    className={email !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Turma"></span>
                </div>
                <div className="container-login-form-btn">
                  <button className="login-form-btn">CADASTRAR</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;