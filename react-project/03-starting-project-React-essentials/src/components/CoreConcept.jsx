/* this func used to display A.
function CoreConcept (props) {
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}*/

// WE CAN also use this func like below with desturactering
export default function CoreConcept ({image, title, description}) {  // this is object desturactering.
    return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  } //separeting component on its own file
  // split components across multiple files
  // storing each component on its own file