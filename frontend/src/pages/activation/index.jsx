import { useParams } from "react-router-dom"

function Activation() {
    const {token}=useParams();
  return (
    <div>Activation Page</div>
  )
}

export default Activation