import "./App.css";
import Books from "./Components/Books";
import Button from "./Components/Button";
import ShowHeading from "./Components/ShowHeading";


function App() {
  const myBooks = [
    { name: "Book 1", author: "Author 1", price: 20 },
    { name: "Book 2", author: "Author 2", price: 25 },
  ];

 

  //const book = { name: 'Book 2', author: 'Author 2', price: 25 }
  const handleClick = () => {
    console.log('clicked')
  };

  return (
    <>
      <p className="text-2xl text-red-300 text-center p-4">
        Click on the Vite and React logos to learn more
      </p>
      <ShowHeading titles="i am heading" name="somrat" />
      <Books books={myBooks} />
      <Button tittle="add item" onClick={handleClick} />
    </>
  );
}

export default App;
