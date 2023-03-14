import Button2 from "components/Button-2";
import styles from "./Footer.module.css";
import logo from "assets/logo.svg";
import Input from "components/Input";
import Textarea from "components/Textarea";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <img src={logo} alt="Logo da AluraGeek" />

        <ul>
          <li>Quem somos nós</li>
          <li>Política de privacidade</li>
          <li>Programa fidelidade</li>
          <li>Nossas lojas</li>
          <li>Quero ser franqueado</li>
          <li>Anuncie aqui</li>
        </ul>

        <form action="" className={styles.form}>
          <h4>Fale conosco</h4>
          <div>
            <Input type="text" name="Nome" id="name" haveLabel />
            <Textarea name="message" placeholder="Escreva a sua mensagem" />
          </div>
          <Button2>Enviar mensagem</Button2>
        </form>
      </div>

      <div className={styles.dev}>
        <p>Desenvolvido por Gabriel Migliatti</p>
        <p>2023</p>
      </div>
    </footer>
  );
}

export default Footer;
