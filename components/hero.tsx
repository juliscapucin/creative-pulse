import { ProductSearchForm } from "@/components"

const Hero = () => {
	return (
		<section className='bg-primary py-20 mb-4'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
				<div className='text-center'>
					<h1 className='text-4xl font-extrabold text-secondary sm:text-5xl md:text-6xl'>
						Find The Perfect Rental
					</h1>
					<p className='my-4 text-xl text-secondary'>
						Discover the perfect property that suits your needs.
					</p>
				</div>
				<ProductSearchForm />
			</div>
		</section>
	)
}
export default Hero
