import React from 'react'
import ProductionBlock from './ProductionBlock'
import FreeBlock from './FreeBlock'

const LandscapeMap = () => {
	return (
		<div className="relative w-full max-w-[1200px] h-[710px] mx-auto mt-16">
			<ProductionBlock top={'top-[121px]'} left={'left-[273px]'} />
			<FreeBlock top={'top-[189px]'} left={'left-[155px]'} />
			<ProductionBlock top={'top-[250px]'} left={'left-[50px]'} />
		</div>
	)
}

export default LandscapeMap
