import iconMusic from '../src/images/icon-music.svg';
import illustration from '../src/images/illustration-hero.svg'
import ('../src/style.css')
const App = ()=>{
  return (
    <div className ="music-card">
        <img src={illustration} alt=""/>
        <h3 className="title">Order Summary</h3>
        <p className="text">You can how listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className="cancel_subscribe">
            <div className="subscribe__info">
                <img className="music-icon" src={iconMusic} alt=""/>
                <div className="subscribe__info-text">
                    <div className="annual">Annual Plan</div>
                    <div>$59.99/year</div>
                </div>
            </div>
            <button className="change">Change</button>
        </div>
        <button className="buy">Proceed to Payment</button>
        <button className="cancel">Cancel Order</button>
    </div>
  )
};
export default App;