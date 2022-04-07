import { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/PlantAction';

function SelectedPlant({ current, AddPlant }) {

    const [care, setCare] = useState([])

    //Funtction for getting the "care list" when care btn is clicked
    function getCare() {
        setCare(current.care);
    }


    return (
        <section className='selectedProductsContainer'>
            <section className='selectedBtns'>
                <Link className="buy" to="/Plants">
                    <button className="selectBtn" id='jungle'>
                        More plants
                    </button>
                </Link>
                <Link to="/MyPlants">
                    <button className="selectBtn" id='jungle'>My Jungle &#10084;</button>
                </Link>
            </section>

            <img className='productImg' id='productPic' src={current.img} alt="" />
            <h2 className="plantName" id='name' >{current.name}</h2>
            <h5 className='selectedTitle'>Orgin:</h5>
            <p className='selectedPara'>{current.orgin}</p>
            <h5 className='selectedTitle'>Site:</h5>
            <p className='selectedPara'>{current.Site}</p>
            <h5 className='selectedTitle'>Care level:</h5>
            <h4 className='selectedPara'>{current.careLevel}</h4>



            <button className='careBtn' onClick={getCare}>Care</button>
            <section className='careContanier'>
                <h5 className='selectedPara'>{care.light}</h5>
                <h5 className='selectedPara'>{care.water}</h5>
                <h5 className='selectedPara'>{care.temp}</h5>
                <h5 className='selectedPara'>{care.humidity}</h5>
                <h5 className='selectedPara'>{care.petFriendly}</h5>
            </section>

            <Link to="/MyPlants">
                <button className="selectBtn" id='addBtn' onClick={() => AddPlant(current)}>Add to my Jungle</button>
            </Link>



        </section>
    );
}

//getting the state result from plantlist (the choosen product)
const getCurrentState = (state) => {
    return {
        current: state.allPlants.currentPlant
    }
}

// passing a new state for adding the plant to jungle 
const addPlant = (dispatch) => {
    return {

        AddPlant: (plant) => dispatch(addToCart(plant)),
    };
};
export default connect(getCurrentState, addPlant)(SelectedPlant);