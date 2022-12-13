import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Index() {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "60px",
  };

  return (
    <>
      <Layout>
        <h2 style={{ display: "flex", margin: "100px" }}>
          Guarda tus libros favoritos, inicia creando uno :)
        </h2>
        <div style={booksContainer}>
          {store.items.map((item) => (
            <Book key={item.id} item={item} />
          ))}
        </div>
      </Layout>
    </>
  );
}
