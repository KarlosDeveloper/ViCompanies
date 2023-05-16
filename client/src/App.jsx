import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Landscape, Auth } from './pages/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	return (
		<>
			<Router>
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					draggable
					theme="dark"
				/>
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
