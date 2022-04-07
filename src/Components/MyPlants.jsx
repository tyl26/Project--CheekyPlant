import { connect } from "react-redux";
import { currentPlant, removeFromList } from "../actions/PlantAction";
import { Link } from 'react-router-dom'

function Cart({ currentPlant, removePlant, selectedPlant }) {

    return (

        <section className="start">
            <Link to="/Plants">
                <button className="selectBtn"> Learn more plants            </button>

            </Link>

            <h4 className="title" id="Myjungle">My Jungle</h4>

            {currentPlant.map((plant, i) => (


                <section className="favoritePlant" key={i}>
                    <img className="productImg" id="favPic" src={plant.img} alt=" product Pic" />
                    <h1 className="plantName" >{plant.name}</h1>


                    <Link to={`/selectedPlants/${plant.id}`}>
                        <button className="favorites" id="moreInfo" onClick={() => selectedPlant(plant)}>More Info</button>
                    </Link >
                    <button className="trash" onClick={() => removePlant(plant)}>&#128465;</button>

                </section>
            ))}

            {/* a conditional of what is going to happen if the jungle is empty or not */}
            {currentPlant.length > 0 ? (
                <h6 className="quote">"We are made for loving. If we don't love, we will be like plants without water."</h6>
            ) : (
                <h5 className="empty">Your jungle is empty</h5>
            )}
        </section>
    );
}

// geeting the state of added plant 
const mapState = state => {

    return {
        currentPlant: state.allPlants.MyList
    }
}

const GetDispatch = dispatch => {
    return {
        //a function for removing the pant from the list. and connecting it to the button
        removePlant: (prod) => dispatch(removeFromList(prod)),
        // getting the info about the plant and conneting it to the button
        selectedPlant: (plant) => dispatch(currentPlant(plant)),
    }
}



export default connect(mapState, GetDispatch)(Cart)