import { Link } from 'react-router-dom'
import { ReactComponent as PlantLogo } from './logo_plant.svg';

function Header() {
    return (
        <section className='headerContainer'>
            <section className='logo'>
                < PlantLogo />
            </section>

            <h3 className='find'>Find your <span className='plant'>Plant</span></h3>
            <Link to="/MyPlants">
                <button className='favorites'>
                   My Jungle &#10084;
                </button>
            </Link>
        </section>
    );
}

export default Header;