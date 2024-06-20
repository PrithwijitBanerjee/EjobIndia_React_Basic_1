import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Profile Page</h2>
      <button onClick={()=>{navigate('/')}}>Go to Home</button>
    </div>
  )
}
