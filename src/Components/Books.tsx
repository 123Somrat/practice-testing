type book = {
     name :string,
     author : string,
     price : Number   
}

type propsType = {
     books : book[]
}

export default function Books({books}:propsType) {
    const data = books
  return (
    <div className="w-2/5 bg-green-200" role='bookCard'>
          {
              data.map((item,index)=>(
                <div key={index}>

                    <h1 role="bookHeading">{item.name}</h1>
                    <h2 role='author'>{item.author}</h2>

             </div>
              ))
          } 
    </div>
  )
}
