import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "../App"


test('demo',()=>{
  expect(true).toBe(true)
})


test('Render the main page',()=>{
   const { getByText } = render(<App/>)  
   

   const paragraphElement = getByText(/Click on the Vite and React logos to learn more/i)
  

   expect(paragraphElement).toBeInTheDocument()

   
   expect(paragraphElement).toHaveTextContent('Click on the Vite and React logos to learn more')

})