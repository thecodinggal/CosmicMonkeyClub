import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main className="text-white text-center">
      <h1 className="text-3xl">Page not found</h1>
      <p>
        <Link to="/">Click here to go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
