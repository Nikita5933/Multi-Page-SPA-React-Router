import {Link, useNavigate} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function HomePage() {
    const navigate =  useNavigate();

    function navigateHandler() {
        navigate('products');
    }

    return <>
        <h1>My Home Page</h1>
        <p>Link to <Link to="products">Products Page</Link></p>
        <p><button onClick={navigateHandler}>Navigate</button></p>
    </>
}

export default HomePage;