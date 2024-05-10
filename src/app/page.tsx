import Gallery from "./Gallery";
import Header from "./Header";
import { data } from "./data";

export default function Home() {
  return (
    <div>
      <Header />
      <main id="content">
        <Gallery items={data} />
      </main>
    </div>
  );
}
