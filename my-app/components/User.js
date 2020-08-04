import React from "react"

const User = (props) => {
	return (
		<div>
			I'm a user called {props.name} and I'm {props.age} years old!
		</div>
	)
}

export default User
