import Accommodation from "@/components/Accommodation"
import Image from "next/image"
import Link from "next/link"
import { Accommodations } from "@/types/AirbnbData"

interface AccommodationListProps {
  accommodations: Accommodations[]
}

const AccommodationList = (
  props: AccommodationListProps
) => {
  const accommodations = props.accommodations
    return (
        <>
            <section className="py-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {accommodations.map( (accommodation, indice)=>(
                    <div key={indice}>
                        <Link href={accommodation.slug}>
                            <Accommodation
                            location={accommodation.location.description}
                                host={accommodation.host}
                                date={accommodation.date}
                                price={accommodation.price}
                                rating={accommodation.rating}
                                hasBadge={accommodation.hasBadge}
                            >    
                                <Image className="w-full aspect-square object-cover rounded-xl"
                                src={accommodation.photos[0].source}
                                alt={accommodation.photos[0].description}
                                width={300}
                                height={300}
                                priority
                                />
                            </Accommodation>
                        </Link>
                    </div>
                ) )}
            </section>
        </>
    )
}

export default AccommodationList