import Container from "@componets/Container"
import Menu from "@componets/Menu";
import Upper from "@componets/Upper"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-900/5">
      <Menu />
      <Container>
        <p> hello world </p>
      </Container>
    </div>
  );
}
