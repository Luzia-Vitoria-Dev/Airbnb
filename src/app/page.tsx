import AccommodationList from "@/widgets/AccommodationList";
import HorizontalFilterNavigation from "@/widgets/HorizontalFilterNavigation";
import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <TopBar/>
        <SearchBar/>
      </header>

      <hr className="my-3"/>

      <main className="container mx-auto">
        <HorizontalFilterNavigation/>
        <AccommodationList/>
      </main>

      <footer className="container mx-auto">
        Rodapé
      </footer>
    </>
  );
}
