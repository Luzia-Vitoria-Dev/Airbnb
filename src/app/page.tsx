import { fetchData } from "@/utils/api";
import AccommodationList from "@/widgets/AccommodationList";
import Footer from "@/widgets/Footer";
import HorizontalFilterNavigation from "@/widgets/HorizontalFilterNavigation";
import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";
export default async function Home() {
  const data = await fetchData()
  return (
    <>
      <header className="container mx-auto">
        <TopBar/>
        <SearchBar/>
      </header>

      <hr className="my-6"/>

      <main className="container mx-auto">
        <HorizontalFilterNavigation icons={data.icons} />
        <AccommodationList accommodations={data.accommodation} />
      </main>

      <footer className="bg-gray-200">
        <Footer/>
      </footer>
    </>
  );
}