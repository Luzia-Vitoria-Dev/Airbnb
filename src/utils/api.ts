import { Accommodations, AirbnbApi } from "@/types/AirbnbData"

export async function fetchData(): Promise<AirbnbApi>{
    try {
        const response = await fetch("https://web.codans.com.br/airbnb")
        const data = response.json()
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function fetchDataById(
    id: string
): Promise<Accommodations | undefined>{
    try {
        const data = await fetchData()
        const accommodation = data.accommodation.find((item: Accommodations)=>{
            return item.slug === decodeURIComponent(id)
        })
        return accommodation
    } catch (error) {
        console.error(error)
        throw error
    }
}