interface AirbnbApi {
    accommodation: Accommodation[]
    icons: Icons[]
}

export interface Accommodation {
    date: string
    host: string
    id: string
    title: string
    slug: string
    location: Location
    hasBadge: boolean
    price: number
    rating: number    
    testimonials: Testimonials[]   
    photos: Photos[]
}

export interface Location {
    description: string
    city: string
    state: string
    country: string
}

export interface Testimonials {
    id: string
    name: string
    image: string
    comment: string
    rating: number
    customerTime: number
    createdAt: number
    stayedAt: number
}

export interface Photos {
    id: string
    source: string
    description: string
}

export interface Icons {
    id: string
    description: string
    source: string
    url: string
}