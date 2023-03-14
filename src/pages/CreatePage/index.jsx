import Input from "components/Input";
import styles from "./CreatePage.module.css";
import Textarea from "components/Textarea";
import Button2 from "components/Button-2";

function CreatePage() {
  return (
    <main className={styles.create__page}>
      <form action="">
        <h2>Adicionar novo produto</h2>
        <Input type="text" name="URL da imagem" id="url" haveLabel />
        <Input type="text" name="Categoria" id="category" haveLabel />
        <Input type="text" name="Nome do produto" id="name" haveLabel />
        <Input type="text" name="Preço do produto" id="price" haveLabel />
        <Textarea name="descrition" placeholder="Descrição do produto" />
        <Button2>Adicionar produto</Button2>
      </form>
    </main>
  );
}

export default CreatePage;
