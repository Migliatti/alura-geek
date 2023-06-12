import styles from "./LoginPage.module.css";
import Input from "components/Input";
import Button2 from "components/Button-2";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className={styles.login__page}>
      <form className={styles.form} action="">
        <h2 className={styles.title}>Iniciar Sessão</h2>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Escreva seu email"
        />
        <Input
          type="password"
          id="senha"
          name="password"
          placeholder="Escreva sua senha"
        />
        <Link to={"/products"}>
          <Button2>Entrar</Button2>
        </Link>
      </form>
    </main>
  );
}

export default LoginPage;
