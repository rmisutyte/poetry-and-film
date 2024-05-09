import Gallery from "./Gallery";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main id="content">
        <Gallery />
      </main>
    </div>
  );
}
