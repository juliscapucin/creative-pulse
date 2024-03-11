export type Product = {
	_id: string
	name: string
	type: string
	interactions: number
	square_feet: number
	rates: {
		monthly?: number
		weekly?: number
		daily?: number
	}
	location: {
		city: string
		state: string
	}
	images: string[]
	services: string[]
}
