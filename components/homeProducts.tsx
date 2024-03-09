import Link from "next/link"
import { ProductCard } from "@/components"
// import { fetchProducts } from '@/utils/requests';

import productData from "@/products.json"

const HomeProducts = async () => {
	// const data = await fetchProducts();

	// const recentProducts = data.products
	//   .sort(() => Math.random() - Math.random())
	//   .slice(0, 3);

	const recentProducts = productData
		.sort(() => Math.random() - Math.random())
		.slice(0, 3)

	return (
		<>
			<section className='px-4 py-6'>
				<div className='container-xl lg:container m-auto'>
					<h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
						Recent Products
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{recentProducts.length === 0 ? (
							<p>No Products Found</p>
						) : (
							recentProducts.map((product) => (
								<ProductCard key={product._id} product={product} />
							))
						)}
					</div>
				</div>
			</section>

			<section className='m-auto max-w-lg my-10 px-6'>
				<Link
					href='/products'
					className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
				>
					View All Products
				</Link>
			</section>
		</>
	)
}
export default HomeProducts
