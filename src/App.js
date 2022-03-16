import React from "react";

function App() {

  const style =
  {
    width: "25%", 
    padding: "10px", 
    marginLeft: "550px",
  }
  const title="Contact Us!";
  return (
    
   
  <div style={style}>
    <h2 className="p-3 mb-2 bg-secondary text-white rounded" style={{textAlign:"center"}}>{title}</h2>
    <form>
                <div style={{display:"flex",justifyContent: "space-between"}}>
                    <div className="mb-3 form-check">
                        <input type="radio" className="form-check-input" id="Miss" checked/>
                        <label className="form-check-label" htmlFor="Miss"><strong>Miss</strong></label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="radio" className="form-check-input" id="Sir"/>
                         <label className="form-check-label" htmlFor="Sir"><strong>Sir</strong></label>
                    </div>
                        <div className="mb-3 form-check">
                        <input type="radio" className="form-check-input" id="Other"/>
                        <label className="form-check-label" htmlFor="Other"><strong>Other</strong></label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder="Your first name" required />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Your last name" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputNumber" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" id="exampleInputNumber" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Your email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email" required />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea">Your message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea" rows="3" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  
  );
}

export default App;
