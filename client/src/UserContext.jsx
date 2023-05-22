import { createContext, useState } from 'react'
export const UserContext = createContext({
	user: {
		_id: '',
		email: '',
		nick: '',
		image: '',
		money: '',
		level: '',
		stars: '',
	},
	setUser: () => {},
})

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		_id: '',
		email: '',
		nick: '',
		image: '',
		money: '',
		level: '',
		stars: '',
	})
	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
