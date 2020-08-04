import React from "react"
import Link from "next/link"
import Router from "next/router"

export default function Home() {
	return (
		<>
			<h1>Main Page</h1>
			<p>
				Go to <Link href="/auth">Auth</Link>
			</p>
			<button onClick={() => Router.push("/auth")}>Go to Auth page</button>
		</>
	)
}
