import "@testing-library/jest-dom";
import {  fireEvent, render, screen } from "@testing-library/react";
import Counter from "../../Components/Counter";

describe('counter',()=>{

   test('counter',()=>{

      render(<Counter/>)

      const btn = screen.getByRole('Count')
      const count = screen.getByText('Count : 0')

      expect(btn).toBeInTheDocument()
      expect(count).toBeInTheDocument()
      
      fireEvent.click(btn)
      expect(count).toHaveTextContent('Count : 1')
       
      fireEvent.click(btn)
      expect(count).toHaveTextContent('Count : 2')

   })
 

})//