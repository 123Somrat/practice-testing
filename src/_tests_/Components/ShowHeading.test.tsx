import '@testing-library/jest-dom'
import { render ,screen } from "@testing-library/react"
import ShowHeading from '../../Components/ShowHeading'

describe('showing a heading',()=>{

 it('shhowing a heading',()=>{
     render(<ShowHeading  titles='heading' name='somrat'/>)
     const h1 = screen.getByText('heading')
     const h2 = screen.getByText('somrat')
     expect(h1).toBeInTheDocument()
     expect(h2).toBeInTheDocument()

     expect(h1).toHaveTextContent('heading')
     expect(h2).toHaveTextContent('somrat')
 })


})