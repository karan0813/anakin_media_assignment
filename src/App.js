import './App.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AvaT from './AvaT';
import Note from './Note';

function App() {
  return (
    <>
      <h2 className='tiitle'>Generating Minutes of Meeting</h2>
          <div className="app">
             <AvaT/>
        <div className='notes_con'>
            <Note/>
        </div>
          </div>
        <div className='btn_con'>
              <button>create Follow up Meeting</button>
              <button> Folow up Meeting</button>
              <input type="date" />
      </div>
      <div className='feedback'>
        <div className='Meetink_Feed'>
          <h10>Meeting Feedback</h10>
          <br />
          <StarBorderIcon className='star'/><StarBorderIcon className='star'/><StarBorderIcon className='star'/><StarBorderIcon className='star'/><StarBorderIcon/>
        </div>
        <div className='Comment'>
        <textarea  placeholder='Leave Comment' id="w3review" name="w3review" rows="4" cols="50"></textarea>
        </div>
        <div className='CheckBox'>
        <input className='input_check' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /><span> <label for="vehicle1"> I agree to the Meetings Minutes</label></span>
        <br/>
        <input className='input_check' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /><span> <label for="vehicle1">I Dont Agree to the Meetings Minutes</label></span>
          {/* <br/> */}
          <div className='btn_cHeckbox'>
            <button className='Close'>Close</button>
            <button className='Submit'>Submit</button>
          </div>
        
        </div>
      </div>
      
    </>
  );
}

export default App;
