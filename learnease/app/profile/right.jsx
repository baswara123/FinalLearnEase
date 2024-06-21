import '../profile/rightstyle.css'

function Right(){
    return(
        <div className="rights">
            <h1>Edit Profile</h1>
            <div className="editcontainer">
                <div className="editbox">
                    First Name :<br></br>
                    <input type='text' ></input>
                </div>
                <div className="editbox">
                    Middle Name :<br></br>
                    <input type='text' ></input>
                </div>
                <div className="editbox">
                    Last Name :<br></br>
                    <input type='text' ></input>
                </div>
                <div className="editbox">
                    Email :<br></br>
                    <input type='text' ></input>
                </div>
                <div className="editbox">
                    Mobile No :<br></br>
                    <input type='text' ></input>
                </div>
                <div className="editbox">
                    Region :<br></br>
                    <input type='text' ></input>
                </div>
                <div className="editbox">
                    Gender :<br></br>
                    <input type='text' ></input>
                </div>
                <div className="editbox">
                    Date Of Birth :<br></br>
                    <input type='date' ></input>
                </div>
            </div>

            <div className="savebtn">
                Save Changes
            </div>
            
            
        </div>

    );



}

export default Right