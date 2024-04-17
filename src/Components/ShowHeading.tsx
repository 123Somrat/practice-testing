type PropsTypes = {
    titles : string,
    name : string
}

export default function ShowHeading({titles, name}:PropsTypes) {
  return (
    <div>
          <h1 role='headings'>{titles}</h1>
          <h1>{name}</h1>
    </div>
  )
}
