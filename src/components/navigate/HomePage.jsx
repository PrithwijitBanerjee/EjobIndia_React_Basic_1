import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate()
  return (
    <div>
        <h2>Home Page</h2>
        <button onClick={()=>{navigate('/profile')}}>Go to Profile</button>
    </div>
  )
}
