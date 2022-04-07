import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlants, currentPlant, addToCart } from "../actions/PlantAction";
import { Link } from 'react-router-dom'
import Header from './Header';


import { connect } from 'react-redux'

function PlantList({ selectedPlant, AddPlant }) {
    const [allPlants, setAllplants] = useState([])
    const [searchPlant, setSearchPlants] = useState("")
    const [visible, setVisible] = useState(false)


    // a back to top button function
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
//



// using useSelector to getting the plant state in the reducer

    useSelector((state) => state.allPlants.plants);
    const dispatch = useDispatch();

//fetching the api and setting it in a empty usestate
    useEffect(() => {
        fetch('http://localhost:3001/PlantsAPI.json')
            .then(res => res.json())
            .then(data => setAllplants(data))

    }, [])
// then dispatching it into "plants" from my reducer 
    useEffect(() => {
        dispatch(setPlants(allPlants))
    }, [allPlants])


    return (
        <section className="start">
            <Header />

            {/* searching for plant by filtering and putting the list into webbserver by mapping */}

            <input className="searchPlants" type="text" placeholder="Search Plants.." onChange={(e) => {
                setSearchPlants(e.target.value)
            }} />
         
            {
                allPlants.filter((plant) => {
                    if (searchPlant === "") {
                        return plant;
                    }
                    else if (
                        plant.name.toLowerCase().includes(searchPlant.toLowerCase())
                    ) {
                        return plant;
                    }

                }).map((plant, index) => (

                    <section key={index} className="listContainer">
                        <section className="product">

                            <img src={plant.img} className="productImg"></img>
                            <h5 className="plantName">{plant.name}</h5>

                            <section className="btns">

                                {/* selected plant btn */}
                                <Link to={`/selectedPlants/${plant.id}`}>
                                    <button className="selectBtn" onClick={() => selectedPlant(plant)}>More Info</button>
                                </Link >



                                {/* more info btn */}
                                <Link to="/MyPlants">
                                    <button className="selectBtn" onClick={() => { AddPlant(plant) }}>Add to my jungle</button>
                                </Link>
                            </section>


                        </section>
                    </section>
                ))
            }
            <button onClick={scrollToTop} style={{ display: visible ? ' inline' : 'none' }} className="top">&#8593;</button>

        </section>
    );
}

// a function where getting the choosen plant state when clicking the btn and result can be sent 
//another component.

const DispatchState = (dispatch) => {
    return {
        selectedPlant: (plant) => dispatch(currentPlant(plant)),
        // a function for adding the plant to the jungle 
        AddPlant: (plant) => dispatch(addToCart(plant))
    };
};
export default connect(null, DispatchState)(PlantList);