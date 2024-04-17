


export default function Button({tittle ,onClick}:{tittle : string ,onClick:()=>void}) {
  
  return (
    <>
      <button role='add item' onClick={onClick}>{tittle}</button>
     </>
  )
}