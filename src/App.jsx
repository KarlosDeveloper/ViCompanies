import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Landscape } from './pages/index'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Landscape />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
