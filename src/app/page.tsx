import TopBar from "@/widgets/TopBar";

export default function Home() {
  return (
    <>
      <div>
        <TopBar />
      </div>

      <hr />

      <div className="border-green-600 border-2">Área conteúdos</div>

      <div className="border-purple-600 border-2">Rodapé</div>

    </>
  );
}
