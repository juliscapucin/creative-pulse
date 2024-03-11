import Image from "next/image"
import Link from "next/link"
import {
	FaRulerCombined,
	FaMoneyBill,
	FaMapMarker,
	FaArrowCircleDown,
} from "react-icons/fa"

import { Product } from "@/types"

type ProductCardProps = {
	product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
	const getRateDisplay = () => {
		const { rates } = product

		if (rates.monthly) {
			return `${rates.monthly.toLocaleString()}/mo`
		} else if (rates.weekly) {
			return `${rates.weekly.toLocaleString()}/wk`
		} else if (rates.daily) {
			return `${rates.daily.toLocaleString()}/day`
		}
	}

	return (
		<div className='rounded-xl shadow-md relative w-full h-full bg-faded-10'>
			<Image
				src={"/images/properties" + product.images[0]}
				alt=''
				height={0}
				width={0}
				sizes='100vw'
				className='w-full h-auto rounded-t-xl'
			/>
			<div className='p-4'>
				<div className='text-left md:text-center lg:text-left mb-6'>
					<div className='text-faded-70'>{product.type}</div>
					<h3 className='text-xl font-bold'>{product.name}</h3>
				</div>
				<h3 className='absolute top-[10px] right-[10px] bg-faded-70 px-4 py-2 rounded-lg text-primary font-bold text-right md:text-center lg:text-right'>
					${getRateDisplay()}
				</h3>

				<div className='flex justify-center gap-4 text-secondary mb-4'>
					<p>
						<FaArrowCircleDown className='inline mr-2' /> {product.interactions}{" "}
						<span className='md:hidden lg:inline'>Interactions</span>
					</p>
					<p>
						<FaRulerCombined className='inline mr-2' />
						{product.square_feet}{" "}
						<span className='md:hidden lg:inline'>sqft</span>
					</p>
				</div>

				<div className='flex justify-center gap-4 text-secondary text-sm mb-4'>
					{product.rates.daily && (
						<p>
							<FaMoneyBill className='inline mr-2' /> Daily
						</p>
					)}

					{product.rates.weekly && (
						<p>
							<FaMoneyBill className='inline mr-2' /> Weekly
						</p>
					)}

					{product.rates.monthly && (
						<p>
							<FaMoneyBill className='inline mr-2' /> Monthly
						</p>
					)}
				</div>

				<div className='border border-faded-30 mb-5'></div>

				<div className='flex flex-col lg:flex-row justify-between mb-4'>
					<div className='flex align-middle gap-2 mb-4 lg:mb-0'>
						<FaMapMarker className='text-secondary mt-1' />
						<span className='text-secondary'>
							{" "}
							{product.location.city} {product.location.state}{" "}
						</span>
					</div>
					<Link
						href={`/properties/${product._id}`}
						className='h-[36px] bg-faded-30 hover:bg-faded-70 text-secondary px-4 py-2 rounded-lg text-center text-sm'
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	)
}
export default ProductCard
