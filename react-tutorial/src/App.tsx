
import { ListGroup } from "./components/Listgroup"

let names = ["Max", "Suzy", "Jim", "Adriaan", "James"];
const handleSelectitem = (item : string) =>  {
  console.log(item);
}



export function App(){
  return <div><ListGroup names={names} heading="Names" onSelectItem={handleSelectitem}/></div>
}