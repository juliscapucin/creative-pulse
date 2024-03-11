"use client"
import { useState, useEffect } from "react"
import { ProductCard } from "@/components"
// import Spinner from "@/components/Spinner"
// import Pagination from "@/components/Pagination"

import productsData from "@/products.json"

const Products = () => {
	const [products, setProducts] = useState(productsData)
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [pageSize, setPageSize] = useState(6)
	const [totalItems, setTotalItems] = useState(0)

	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		try {
	// 			const res = await fetch(
	// 				`/api/products?page=${page}&pageSize=${pageSize}`
	// 			)

	// 			if (!res.ok) {
	// 				throw new Error("Failed to fetch data")
	// 			}

	// 			const data = await res.json()
	// 			setProducts(data.products)
	// 			setTotalItems(data.total)
	// 		} catch (error) {
	// 			console.log(error)
	// 		} finally {
	// 			setLoading(false)
	// 		}
	// 	}

	// 	fetchProducts()
	// }, [page, pageSize])

	// const handlePageChange = (newPage) => {
	// 	setPage(newPage)
	// }

	return loading ? (
		// <Spinner />
		<h2>Loading</h2>
	) : (
		<section className='px-4 py-6'>
			<div className='container-xl lg:container m-auto px-4 py-6'>
				{products.length === 0 ? (
					<p>No products found</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{products.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>
				)}
				{/* <Pagination
					page={page}
					pageSize={pageSize}
					totalItems={totalItems}
					onPageChange={handlePageChange}
				/> */}
			</div>
		</section>
	)
}
export default Products
