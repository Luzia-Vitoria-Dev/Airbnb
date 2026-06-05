import { AirbnbApi } from "@/types/AirbnbData"

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