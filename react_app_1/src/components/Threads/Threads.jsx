import { Link } from 'react-router-dom'
import './Threads.css'
export const Threads = ({title , ThreadId}) => {

    return (
        <div className='threadContainer'>
            <Link key={ThreadId} to={`/${ThreadId}`}>
            <span className='threadTitle'>{title}</span>
            </Link>
        </div>

    )
}

export default Threads