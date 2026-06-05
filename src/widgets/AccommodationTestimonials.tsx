import { IconStarFilled } from "@/assets/icons"
import { Testimonials } from "@/types/AirbnbData"
import Image from "next/image"

interface AccommodationTestimonialsProps {
    testimonials: Testimonials[]
    rating: number

}

const AccommodationTestimonials = (
    props: AccommodationTestimonialsProps
) => {
    const testimonials = props.testimonials
    const rating = props.rating
    return (
        <div className="w-full py-4">
            <h2 className="text-xl font-semibold">Depoimentos</h2>
            <div className="flex gap-2 items-center">
                <IconStarFilled className="size-4" />
                <span>{rating}</span>
            </div>

            {testimonials.map((testimonials, indice) => (
                <div className="flex flex-row gap-2 py-4 items-start" key={indice}>
                    <Image
                    className="aspect-square object-cover rounded-full"
                    src={testimonials.image}
                    alt={testimonials.name}
                    width={48}
                    height={48}
                    />

                    <div>
                        <span className="text-md font-semibold">{testimonials.name}</span>
                        <p>{testimonials.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AccommodationTestimonials