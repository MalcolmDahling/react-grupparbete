import { Outlet } from 'react-router-dom';
import './Layout.scss';

export function Layout(){

    return(
        <div className="wrapper">
            <header>Header</header>

            <main>
                <Outlet></Outlet>

                <p>Vår resturang: https://school-restaurant-api.azurewebsites.net/restaurant/624abc41df8a9fb11c3ea8b6</p>
            </main>
            
            <footer>Footer</footer>
        </div>
    );
}