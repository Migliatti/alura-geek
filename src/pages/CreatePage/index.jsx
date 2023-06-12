import Input from "components/Input";
import styles from "./CreatePage.module.css";
import Textarea from "components/Textarea";
import Button2 from "components/Button-2";
import { useProdutosContext } from "common/context/Products";

function CreatePage() {
  const { formValues, setFormValues, product, setProduct } =
    useProdutosContext();
  const idUltimoProduto = product[product.length - 1].id;
  const novoId = idUltimoProduto + 1;

  function handleSubmit(event) {
    event.preventDefault();
    const novoObjeto = { ...formValues, id: novoId };
    const novaListaProdutos = [...product, novoObjeto];
    setProduct(novaListaProdutos);
    setFormValues({
      id: 0,
      url: "",
      category: "",
      name: "",
      price: 0,
      description: "",
    }); // Limpar os valores do formulário após adicionar o objeto à lista
  }

  return (
    <main className={styles.create__page}>
      <form onSubmit={handleSubmit}>
        <h2>Adicionar novo produto</h2>
        <Input type="text" name="URL da imagem" id="url" haveLabel required />
        <Input type="text" name="Categoria" id="category" haveLabel required />
        <Input
          type="text"
          name="Nome do produto"
          id="name"
          haveLabel
          required
        />
        <Input
          type="number"
          name="Preço do produto"
          id="price"
          haveLabel
          required
        />
        <Textarea
          name="description"
          id="description"
          placeholder="Descrição do produto"
          required
        />
        <Button2>Adicionar produto</Button2>
      </form>
    </main>
  );
}

export default CreatePage;
