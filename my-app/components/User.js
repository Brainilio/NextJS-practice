import React from "react"

const User = (props) => {
	return (
		<>
			<div>
				I'm a user called {props.name} and I'm {props.age} years old!
			</div>
			<style jsx>
				{`
					div {
						border: 1px solid #eee;
						box-shadow: 0 2p 3p #ccc;
						padding: 20px;
						text-align: center;
					}
				`}
			</style>
		</>
	)
}

export default User
