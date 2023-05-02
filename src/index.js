import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import "./index.css"
import { books } from "./books"
import Book from "./Book"

const BookList = () => {
  return (
    <>
      <h1>Books for the week</h1>
      <section className="booklist ">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

ReactDOM.render(<BookList />, document.getElementById("root"))
