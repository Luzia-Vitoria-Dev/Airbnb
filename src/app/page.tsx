import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";

export default function Home() {
  return (
    <>
      <div>
        <TopBar />
        <SearchBar />
      </div>

      <hr className="mt-5" />

      <div className="border-green-600 border-2 mt-10">Área conteúdos</div>

      <div className="border-purple-600 border-2">Rodapé</div>

    </>
  );
}
