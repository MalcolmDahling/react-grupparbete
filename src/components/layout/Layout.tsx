import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.scss';

export function Layout(){


    const [version, setVersion] = useState('desktop');

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;

        if(width <= 768){
            setVersion('mobile');
        }
        else{
            setVersion('desktop');
        }
    }

    window.addEventListener('resize', getWindowDimensions);

    





    useEffect(() => {
        getWindowDimensions();
    }, []);







    const [showMenu, setShowMenu] = useState(false);

    function hamburgerToggle(){
        setShowMenu( !showMenu );
    }





    return(
        <div className="wrapper">
            <header>
                <h1>4 Guys</h1>

                {version == 'mobile' &&
                    <div className="hamburger" onClick={hamburgerToggle}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                }


                {version == 'mobile' && showMenu &&
                    <nav>
                        <ul>
                            <li><Link to="/" className="navLink" onClick={hamburgerToggle}>Start</Link></li>
                            <li><Link to="/booking" className="navLink" onClick={hamburgerToggle}>Bokningar</Link></li>
                            <li><Link to="/contact" className="navLink" onClick={hamburgerToggle}>Kontakt</Link></li>
                            <li><Link to="/admin" className="navLink" onClick={hamburgerToggle}>Admin</Link></li>
                        </ul>
                    </nav>
                }


                {version == 'desktop' &&
                    <nav>
                        <ul>
                            <li><Link to="/" className="navLink">Start</Link></li>
                            <li><Link to="/booking" className="navLink">Bokningar</Link></li>
                            <li><Link to="/contact" className="navLink">Kontakt</Link></li>
                            <li><Link to="/admin" className="navLink">Admin</Link></li>
                        </ul>
                    </nav>
                }

            </header>

            <main>
                
                <Outlet></Outlet>
                

                <p className="Restaurant">Vår resturang: https://school-restaurant-api.azurewebsites.net/restaurant/624abc41df8a9fb11c3ea8b6</p>
            </main>
            
            <footer>SIDA AV GRUPP-5 <br/>Copyright &#169;2022 JAMMdevelopers
                <p>Tel: 000- 000 00 00</p>
            </footer>
        </div>
    );
}