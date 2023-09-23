import React from 'react'
import Block from './Block'
import Road from './Road'

const LandscapeMap = () => {
	return (
		<div className="relative w-full max-w-[1200px] h-[710px] mx-auto mt-16">
			<Block top={'top-[127px]'} left={'left-[262px]'} type={1} />
			<Block top={'top-[189px]'} left={'left-[155px]'} type={1} />
			<Block top={'top-[250px]'} left={'left-[50px]'} type={1} />
			<Road top={'top-[180px]'} left={'left-[302px]'} type={1} />
			<Road top={'top-[272px]'} left={'left-[143px]'} type={1} />
			<Block top={'top-[240px]'} left={'left-[327px]'} type={6} />
			<Block top={'top-[293px]'} left={'left-[418px]'} type={7} />
			<Block top={'top-[302px]'} left={'left-[220px]'} type={4} />
			<Block top={'top-[355px]'} left={'left-[311px]'} type={5} />
			<Road top={'top-[363px]'} left={'left-[175px]'} type={2} />
			<Road top={'top-[288px]'} left={'left-[558px]'} type={1} />
			<Road top={'top-[382px]'} left={'left-[396px]'} type={1} />
			<Road top={'top-[455px]'} left={'left-[333px]'} type={2} />
			<Block top={'top-[390px]'} left={'left-[72px]'} type={2} />
			<Block top={'top-[443px]'} left={'left-[163px]'} type={2} />
		</div>
	)
}

export default LandscapeMap
