import React from 'react'
import { UserContextProvider } from './UserContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Landscape, Auth, Company } from './pages/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	return (
		<UserContextProvider>
			<Router>
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnHover={false}
					draggable
					theme="dark"
				/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/landscape" element={<Landscape />} />
					<Route path="/company/:id" element={<Company />} />
					<Route path="/auth" element={<Auth />} />
				</Routes>
			</Router>
		</UserContextProvider>
	)
}

export default App
