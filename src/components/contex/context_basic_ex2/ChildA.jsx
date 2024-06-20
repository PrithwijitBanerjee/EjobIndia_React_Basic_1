import { useContext } from "react"
import { contextContainer } from "./contextContainer"


const ChildA = () => {
 const {posts} = useContext(contextContainer);
 console.log("posts: ", posts);   
  return (
    <div>ChildA</div>
  )
}

export default ChildA