import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Maincontent = () => {
  const [selectedTime, setSelectedTime] = useState('1h');
  const [data, setData] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from db.json (assuming it's in the public folder)
    axios.get('/db.json').then(response => {
        console.log(response.data); // Check the fetched data
      setData(response.data);
    });
  }, []);

  const renderGraph = () => {
    if (!data || !data[selectedTime]) {
      return <div>Loading...</div>;
    }

    const timeData = data[selectedTime];

    const maxValue = Math.max(...timeData);

    return (
      <div className="graph">
        {timeData.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${(value / maxValue) * 90}%`,
              backgroundColor: index % 2 === 0 ? '#FCD503' : '#FCD504',
            }}
          >
            <div className="tooltip" style={{ zIndex: 3 }}>{value} Signups </div>
          </div>
        ))}
      </div>
    );
  };
    return ( 
<div className="main-content-wrapper">
<div className="header">
        <h2>Summer referral competition</h2>
        <div className="timeline">
  <p className={`clickable ${selectedTime === '1h' ? 'dark' : 'light'}`} onClick={() => setSelectedTime('1h')}>1h</p>
  <p className={`clickable ${selectedTime === '24h' ? 'dark' : 'light'}`} onClick={() => setSelectedTime('24h')}>24h</p>
  <p className={`clickable ${selectedTime === '30d' ? 'dark' : 'light'}`} onClick={() => setSelectedTime('30d')}>30d</p>
  <p className={`clickable ${selectedTime === '60d' ? 'dark' : 'light'}`} onClick={() => setSelectedTime('60d')}>60d</p>
</div>

      </div>

<div className="graph-part" style={{ position: 'relative' }}>
  <h2 style={{ textAlign: 'initial' }}>
    100,000
    <img src="./users.svg" alt="" style={{ marginLeft: '7px', height: '18px' }} />
  </h2>
  <p style={{ textAlign: 'initial', marginTop: '-27px' }}>Participants</p>
  {renderGraph()}
</div>
{/* Insights BLock */}




    <div className="summary">
    <div className="sum-rec">
    <div className='insights'>

<div className="insights-head">
<h2>ZooTools insights</h2>
<p style={{marginTop:'-20px'}}>Making analytics simple and actionable</p>
</div>
<div className="better">
<div className="left">
<p style={{textAlign:'left', fontWeight:'bolder'}}>Summary</p>
        < div style={{textAlign:'left'}}>
            <p><img src="down.png" alt="" style={{transform: 'rotate(90deg)'}} />   <span style={{fontWeight:'bold'}}>Signups are slowing down.</span>  -5% new than last week.</p>
            <p> <img src="upvote-sm.png" alt="" style={{transform: 'rotate(-90deg)', fontWeight:'bold'}} />  <span style={{fontWeight:'bold'}}>80%</span> of your signups were invited by other members.</p>
            <p> <img src= "idea-16.png" alt="" /> <span style={{fontWeight:'bold'}}>80%</span> of your signups were invited by a friend </p>
            <p> <img src="idea-16.png" alt=""  /> <span style={{fontWeight:'bold'}}>80%</span> of your signups were invited by a friend. </p>

        </div>
</div>

    <div className="recomm">

        <p style={{fontWeight:'bolder'}}>Recommendations</p>
        <p className="lolz">Make sure to promote and share your form</p>
        <p className="lolz">Congrats! This is huge. Keep giving rewards for your users.</p>
    </div>
    
</div>
</div>

</div>
</div>




{/* 4 div scoreboards  */}
<div className="four-scoreboards">


<div className="leaderboard">

<p style={{margin:'0', fontSize : 'small', fontWeight : 'bold' , textAlign:'left', paddingLeft:'10px' }}>User LeaderBoard</p>

<table>
		<thead>
			<tr>
				<th className="traffic-cell" style={{ width: '120px'}}>Email</th>
				<th>Friends Invited</th>
				<th>Country</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td className="traffic-cell" style={{ width: '120px'}}>paula.suarez@con..es</td>
				<td>6500</td>
				<td>USA</td>
			</tr>
			<tr>
				<td className="traffic-cell">laura.kene.3@yahoo.com</td>
				<td>2,300</td>
				<td>Monaco</td>
			</tr>
			<tr>
				<td className="traffic-cell">aaron.michael@arg.org</td>
				<td>1,200</td>
				<td>Prague</td>
			</tr>
			<tr>
				<td className="traffic-cell">jeremy.runner@aol.com</td>
				<td>900</td>
				<td>China</td>
			</tr>
            <tr>
				<td className="traffic-cell">dwight.schrute@dundee.com</td>
				<td>200</td>
				<td>Germany</td>
			</tr>
		</tbody>
       <tr>
       <td colSpan="3" style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'inline-block', padding: '4px 8px' }}>
          <button
            style={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              padding: '4px 8px',
              border: 'none',
              cursor: 'pointer',
              fontSize : 'inherit'
            }}
            onClick={() => navigate('/development')}
          >
            See leaderboard
          </button>
        </td>
       {/* <td colSpan="3" style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'inline-block', padding: '4px 8px' }}><a style={{ textDecoration: 'none', color: 'inherit' }}href="google">See leaderboard</a></td> */}
</tr>
	</table>



</div>

<div className="traffic">
<table>
  <thead>
    <tr>
      <th style={{ fontSize: 'small', fontWeight: 'bold' , width: '120px'}} className="traffic-cell">Traffic</th>
      <th style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'inline-block', padding: '4px 8px' }}>Source</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 75%, transparent 75%)' }}>Google</td>
      <td>&nbsp;</td>
      <td>30,000</td>
    </tr>
    <tr>
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 55%, transparent 55%)' }}>Twitter</td>
      <td>&nbsp;</td>
      <td>20,000</td>
      
    </tr>

    <tr>
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 40%, transparent 40%)' }}>Facebook</td>
      <td>&nbsp;</td>
      <td>10,000</td>
      
    </tr>
    <tr>
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 30%, transparent 30%)' }}>LinkedIn</td>
      <td>&nbsp;</td>
      <td>5,000</td>
      
    </tr>
    <tr>
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 15%, transparent 15%)' }}>YouTube</td>
      <td>&nbsp;</td>
      <td>3,000</td>
      
    </tr>  <tr>
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 5%, transparent 5%)' }}>Other</td>
      <td>&nbsp;</td>
      <td>2,000</td>
      
    </tr>
  </tbody>
  <tfoot>
    <tr>

    <td colSpan="3" style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'inline-block', padding: '4px 8px' }}>
          <button
            style={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              padding: '4px 8px',
              border: 'none',
              cursor: 'pointer',
              fontSize : 'inherit'
            }}
            onClick={() => navigate('/development')}
          >
            See Traffic Sources
          </button>
        </td>
      {/* <td colSpan="3" style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'inline-block', padding: '4px 8px' }}><a style={{ textDecoration: 'none', color: 'inherit' }}href="google.com">See traffic sources</a>  </td> */}
    </tr>
  </tfoot>
</table>




</div>
<div className="location">

<table>
		<thead>
			<tr>
				<th style={{ fontSize: 'small', fontWeight: 'bold' , width: '120px'}} className="traffic-cell">Signup location</th>
				<th style={{backgroundColor : '#f5f5f5', borderRadius : '8px' , display: 'inline-block', padding : '4px 8px'}}>Country</th>
				<th>City</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				{/* <td><span class="fi fi-us"></span>United states</td> */}
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 60%, transparent 60%)' }}><span class="fi fi-us"></span>    United states</td>

				<td>&nbsp;</td>
				<td>30,000</td>
			</tr>
			<tr>
			
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 40%, transparent 40%)' }}><span class="fi fi-de"></span>    Germany</td>

				<td>&nbsp;</td>
				<td>20,000</td>
			</tr>
			<tr>
	
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 25%, transparent 25%)' }}><span class="fi fi-nl"></span>    Netherlands</td>

				<td>&nbsp;</td>
				<td>10,000</td>
			</tr>
			<tr>
	
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 17%, transparent 17%)' }}><span class="fi fi-in"></span>    India</td>

                
				<td>&nbsp;</td>
				<td>5,000</td>
			</tr>
			<tr>
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 8%, transparent 8%)' }}><span class="fi fi-jp"></span>    Japan</td>

				<td>&nbsp;</td>
				<td>3,000</td>
			</tr>
			<tr>
      <td className="traffic-cell" style={{ width: '120px',background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 4%, transparent 4%)' }}><span class="fi fi-nl"></span>     Other</td>

				<td>&nbsp;</td>
				<td>2,000</td>
			</tr>
		</tbody>
        {/* <p style={{backgroundColor : '#f5f5f5', borderRadius : '8px' , display: 'inline-block', padding : '4px 8px'}}><a style={{ textDecoration: 'none', color: 'inherit' }}href="google.com">See all countries</a></p> */}
        <tfoot>
    <tr>

    <td colSpan="3" style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'inline-block', padding: '4px 8px' }}>
          <button
            style={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              padding: '4px 8px',
              border: 'none',
              cursor: 'pointer',
              fontSize : 'inherit'
            }}
            onClick={() => navigate('/development')}
          >
            See all countries
          </button>
        </td>
    </tr>
  </tfoot>
	</table>



</div>
<div className="behavior">


<table>
		<thead>
			<tr>
				<th style={{ fontSize: 'small', fontWeight: 'bold' , width: '120px'}} className="traffic-cell">Behaviour</th>
				<th style={{backgroundColor : '#f5f5f5', borderRadius : '8px' , display: 'inline-block', padding : '4px 8px'}}>Browsers</th>
				<th>Decides</th>
			</tr>
		</thead>
        <tbody>
			<tr>
				{/* <td><span class="fi fi-us"></span>United states</td> */}
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 60%, transparent 60%)' }}><span class="fi fi-sjnsajn"></span>    United states</td>

				<td>&nbsp;</td>
				<td>30,000</td>
			</tr>
			<tr>
			
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 40%, transparent 40%)' }}><span class="fi fi-sjnsajn"></span>   Germany</td>

				<td>&nbsp;</td>
				<td>20,000</td>
			</tr>
			<tr>
	
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 25%, transparent 25%)' }}><span class="fi fi-sjnsajn"></span>    Netherlands</td>

				<td>&nbsp;</td>
				<td>10,000</td>
			</tr>
			<tr>
	
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 17%, transparent 17%)' }}><span class="fi fi-sjnsajn"></span>   India</td>

                
				<td>&nbsp;</td>
				<td>5,000</td>
			</tr>
			<tr>
      <td className="traffic-cell" style={{ width: '120px', background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 8%, transparent 8%)' }}><span class="fi fi-sjnsajn"></span>    Japan</td>

				<td>&nbsp;</td>
				<td>3,000</td>
			</tr>
			<tr>
      <td className="traffic-cell" style={{ width: '120px',background: 'linear-gradient(to right, #FFF5C2 0%, #FFF5C2 4%, transparent 4%)' }}><span class="fi fi-sjnsajn"></span>    Other</td>

				<td>&nbsp;</td>
				<td>2,000</td>
			</tr>
		</tbody>

        <tfoot>
    <tr>

    <td colSpan="3" style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'inline-block', padding: '4px 8px' }}>
          <button
            style={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              padding: '4px 8px',
              border: 'none',
              cursor: 'pointer',
              fontSize : 'inherit'
            }}
            onClick={() => navigate('/development')}
          >
            See all countries
          </button>
        </td>
    </tr>
  </tfoot>


	</table>
</div>



</div>

</div>
     );
}
 
export default Maincontent;