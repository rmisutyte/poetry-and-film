import { Gallery } from "./containers/Gallery";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="content">
        <Gallery />
      </main>
    </>
  );
}
