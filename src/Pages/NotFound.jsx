import {Link} from 'react-router-dom'

function NotFound(){
    return(
    <div className="not-found">
        <h1>404</h1>
        <p>Oops! This page not found 😢</p>
        <Link to="/" className="back-home">Back to home</Link>
    </div>
    )
}

export default NotFound