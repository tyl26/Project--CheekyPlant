import { Link } from "react-router-dom";


function StartPage() {
    return (
        <section className="startContainer">
            <h1 className="title">Cheeky Plant</h1>
            <img className="startImg " src="https://gardenerguy.in/img/bg-woman.png" alt="" />
            <h5 className="intro">We help you grow and care for your plants effortlessly.</h5>
            <Link className="buy" to="/Plants">
                <button className="getPlanting">
                    Get Planting
                </button>
            </Link>
        </section>
    );

}

export default StartPage;