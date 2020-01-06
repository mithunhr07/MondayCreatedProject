import React, { Component } from 'react';

class Bindu extends Component {
  render() {
    return (
      <div>
      <form>

<label>Leave Type</label>
<select>
<option value="Maternity Leave">Maternity Leave</option>
<option value="Earned Leave">Earned Leave</option>
<option value="Componsentory Off">Componsentory Off</option>
<option value="Sick Leave">Sick Leave</option>
</select><br></br>

<label>From Date</label>
<input type="number" name=" Date" placeholder=" "></input>

<label>From Session</label>
<select>
<option>Session1</option>
<option>Session2</option>
</select><br></br>

<label>To Date</label>
<input type="number" name=" Date" placeholder="  "></input>

<label>To Session</label>
<select>
<option>Session2</option>
<option>Session1</option>
</select><br></br>

<label>Days</label>
<input type="number" name=" Days" placeholder="0"></input>

<label>Balance</label>
<input type="number" name=" Balance" placeholder="0"></input><br></br>

<label>Reason</label>
<input type="text" name=" Reason" placeholder=""></input><br></br>

<label>Contact Details</label>
<input type="text" name=" Contact Details" placeholder=" "></input><br></br>

<label>CC To</label>
<input type="text" name=" CC" placeholder=""></input>

    <p>Note : </p>
<button>Apply</button>
<button>Cancel</button>
</form>
    </div>
    );
  }
}

export default Bindu;