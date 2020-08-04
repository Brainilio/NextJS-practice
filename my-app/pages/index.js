import Link from "next/link"
import Router from "next/router"

import React, { Component } from "react"

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Main Page</h1>
				<p>
					Go to <Link href="/auth">Auth</Link>
				</p>
				<button onClick={() => Router.push("/auth")}>Go to Auth page</button>
			</div>
		)
	}
}

export default Home
