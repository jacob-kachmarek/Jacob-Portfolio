import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <header className='px-3 header-background'>
            <h1>
                Jacob Kachmarek  
            </h1>
            <nav className="nav">
                <li className="nav-item">
                    <Link to='/About' className='nav-link active'>
                        About Me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className='nav-link active custom-link'>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/Resume' className='nav-link active'>
                        Resume
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/Contact' className='nav-link active'>
                        Contact
                    </Link>
                </li>
            </nav>
        </header>       
    )
}