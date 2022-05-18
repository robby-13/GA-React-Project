import image from '../images/image1.jpeg'
import HomeData from './Data/HomeData'

const Home = () => {
    return (
        <div className="home-page">
            <h1>Knowledge is Power</h1>
            <img src={image} alt="Great Sikh scholar Sant Inderjeet Singh" style={{width:250, height:350}}/>
            <p>A homage to the living embodiment of wisdom, Sant Inderjeet Singh of Raqba, from the Panjab region of northern India</p>
            <br></br>
            <HomeData />
            <br></br>
            <p className="home-bio">
                Knowledge is power! Use this app for all your wisdom needs, because sometimes all you need is a random
                quote to get through whatever you need to get through. Navigate through the app to read random quotes
                and view names of authors available in the API.
            </p>

        </div>
    )
}

export default Home