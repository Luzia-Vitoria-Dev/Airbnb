import { fetchDataById } from "@/utils/api"
import AccommodationDetails from "@/widgets/AccommodationDetails"
import AccommodationTestimonials from "@/widgets/AccommodationTestimonials"
import Footer from "@/widgets/Footer"
import ImageGallery from "@/widgets/ImageGallery"
import SearchBar from "@/widgets/SearchBar"
import TopBar from "@/widgets/TopBar"
import { notFound } from "next/navigation"

interface PageProps {
    id: string
}

export default async function Page(
    {params} : {params: Promise<PageProps>}
) {
    const {id} = await params
    const accommodation = await fetchDataById(id)
    if (!accommodation) {
      notFound()
    }
    return (
        <div>
            <header className="container mx-auto">
                <TopBar/>
                <SearchBar/>
            </header>

            <main className="container mx-auto py-6">
                <h1 className="text-3xl font-semibold pb-2">{accommodation.title}</h1>
                <ImageGallery photos={accommodation.photos}/>
                <div className="flex flex-col md:flex-row">
                  <AccommodationDetails accommodation={accommodation} />
                  <AccommodationTestimonials />
                </div>
            </main>

            <footer className="bg-gray-200">
                <Footer/>
            </footer>
        </div>
    )
}