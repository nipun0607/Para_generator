import "./Header.css";
import { useState } from "react";
const Header = (props) => {
  const paraGenerator = () => {
    props.counter(vl);
    
  };

  const paraChange = (e) => {
    console.log(e.target.value);
    setVl(e.target.value);
  };
  const [vl, setVl] = useState(0);
  return (
    <div className="header">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div className="input_container">
        <p>Paragraphs:</p>
        <input type="number" value={vl} placeholder="0" onChange={paraChange} />
        <button onClick={paraGenerator}>Generate</button>
      </div>
    </div>
  );
};

export default Header;
