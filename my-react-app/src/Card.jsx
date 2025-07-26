import profilePic from './assets/picture.png';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="picture" ></img>
            <h2 className='card-title'>Srinjoy</h2>
            <p className="card-text">Software Developer Engineer</p>
        </div>
    )
}

export default Card;