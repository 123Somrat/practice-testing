import '@testing-library/jest-dom'
import { render ,screen } from "@testing-library/react"
import Books from '../../Components/Books'

const myBooks = [
    { name: 'Book 1', author: 'Author 1', price: 20 },
    { name: 'Book 2', author: 'Author 2', price: 25 },
    { name: 'Book 2', author: 'Author 2', price: 25 }
];

describe('Showing books',()=>{


  it('showing books',()=>{
      render(<Books books={myBooks}/>)


      const bookCard = screen.getByRole('bookCard');
      const bookHeading = screen.getAllByRole('bookHeading')
      const author = screen.getAllByRole('author')
      expect(bookCard).toBeInTheDocument()
      expect(bookHeading[0]).toBeInTheDocument()
      expect(bookHeading[0]).toHaveTextContent( myBooks[0].name)
      expect(author[0]).toBeInTheDocument()
      expect(author[0]).toHaveTextContent(myBooks[0].author)
      expect(bookHeading[1]).toBeInTheDocument()
      expect(bookHeading[1]).toHaveTextContent( myBooks[1].name)
      expect(author[1]).toBeInTheDocument()
      expect(author[1]).toHaveTextContent(myBooks[1].author)


  })


})