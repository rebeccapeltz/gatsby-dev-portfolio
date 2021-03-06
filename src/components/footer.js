import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
      <a
        href="https://www.cloudinary.com"
        target="_blank"
        rel="noreferrer"
      >
        Cloudinary
      </a>
      .
    </footer>
  )
}

export default Footer
