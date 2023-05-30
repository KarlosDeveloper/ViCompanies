import { createContext, useState } from 'react'
export const UserContext = createContext({
	user: {
		_id: '',
		name: '',
		email: '',
		image: '',
		money: '',
		level: '',
		stars: '',
		privateNote: '',
		publicNote: '',
		companyLevel: '',
		rating: '',
		rank: '',
		createdAt: '',
	},
	setUser: () => {},
})

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		_id: '',
		name: '',
		email: '',
		image: '',
		money: '',
		level: '',
		stars: '',
		privateNote: '',
		publicNote: '',
		companyLevel: '',
		rating: '',
		rank: '',
		createdAt: '',
	})
	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
