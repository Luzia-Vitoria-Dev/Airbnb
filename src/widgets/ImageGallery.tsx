import Image from "next/image"

type Photo = {
    id: string
    source: string
    description: string
}

interface ImageGalleryProps {
    photos: Photo[]
}

const ImageGallery = (
    {photos} : ImageGalleryProps
) => {
    return (
        <div className="grid grid-cols-6 gap-2">
            {photos.slice(0, 9).map((photo, indice) => {
                const firstPhoto = indice == 0 ? 'col-span-2 row-span-2' : ''
                return (
                    <div key={indice}
                    className={`${firstPhoto}`}
                    >
                        <Image className="w-full aspect-square object-cover"
                        src={photo.source}
                        alt={photo.description}
                        width={1280}
                        height={720}
                        priority
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ImageGallery