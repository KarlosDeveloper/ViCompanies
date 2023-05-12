import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Landscape, Auth } from './pages/index'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/landscape" element={<Landscape />} />
					<Route path="/auth" element={<Auth />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
