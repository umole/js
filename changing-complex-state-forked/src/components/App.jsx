// import React, { useState } from "react";

// function App() {
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: ""
//   });
//   //const [lName, setLName] = useState("");

//   function handleChange(event) {
    
//     const [name, value] = event.target;

//     setFullName((prevValue) => {
//       if (name === "fName") {
//         fullName.fName = value;
//         fullName.lName = prevValue.lName;
//       } else {
//         fullName.fName = prevValue.fName;
//         fullName.lName = value;
//       }
      
//     });    
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fullName.fName} {fullName.lName}
//       </h1>
//       <form>
//         <input
//           onChange={handleChange}
//           name="fName"
//           placeholder="First Name"
//           value={fullName.fName}
//         />
//         <input onChange={handleChange} name="lName" placeholder="Last Name" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFullName(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
