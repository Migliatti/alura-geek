import Input from "components/Input";
import styles from "./CreatePage.module.css";
import Textarea from "components/Textarea";
import Button2 from "components/Button-2";
import { useProdutosContext } from "common/context/Products";

function CreatePage() {
  const { newProduct, formValues } = useProdutosContext();
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
  }

  return (
    <main className={styles.create__page}>
      <form onSubmit={handleSubmit}>
        <h2>Adicionar novo produto</h2>
        <Input
          type="text"
          name="URL da imagem"
          id="url"
          haveLabel
          required
          defaultValue={formValues.url}
          newProduct={newProduct}
        />
        <Input
          type="text"
          name="Categoria"
          id="category"
          haveLabel
          required
          defaultValue={formValues.category}
          newProduct={newProduct}
        />
        <Input
          type="text"
          name="Nome do produto"
          id="name"
          haveLabel
          required
          defaultValue={formValues.category}
          newProduct={newProduct}
        />
        <Input
          type="number"
          name="Preço do produto"
          id="price"
          haveLabel
          required
          defaultValue={formValues.price}
          newProduct={newProduct}
        />
        <Textarea
          name="description"
          placeholder="Descrição do produto"
          required
          defaultValue={formValues.description}
          newProduct={newProduct}
        />
        <Button2>Adicionar produto</Button2>
      </form>
    </main>
  );
}

export default CreatePage;
