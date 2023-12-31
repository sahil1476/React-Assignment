import React from "react";
import "../component/header.css";
// function Header() {
//   return (
//     <header
//       style={{
//         backgroundColor: "black",
//         padding: "20px",
//         display: "flex",
//         alignItems: "center",
//         flexWrap: "wrap"
//       }}
//     >
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <svg x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
//           <path
//             fill="#29b6f6"
//             fill-rule="evenodd"
//             d="M24,4C12.96,4,4.01,12.954,4.01,24	c0,10.141,7.545,18.519,17.325,19.823v-4.03c0-1.136-0.716-2.158-1.793-2.519c-5.643-1.897-9.68-7.293-9.531-13.611	c0.181-7.692,6.444-13.74,14.133-13.662c7.662,0.078,13.849,6.316,13.849,14c0,0.72-0.056,1.44-0.164,2.151	c-1.713,11.291-16.412,17.637-16.492,17.672C22.208,43.939,23.097,44,24,44c11.04,0,19.99-8.954,19.99-20S35.04,4,24,4"
//             clip-rule="evenodd"
//           ></path>
//           alt="logo"
//         </svg>

//         {/* Vertical Line */}
//         <div
//           style={{
//             borderLeft: "5px solid red",
//             height: "80px",
//             margin: "0 12px"
//           }}
//         ></div>

//         <div
//           style={{
//             color: "white",
//             fontSize: "40px",
//             fontWeight: "bold",
//             marginRight: "180px"
//           }}
//         >
//           S T O R I E S
//         </div>
//       </div>
//       <button
//         style={{
//           backgroundColor: "yellow",
//           color: "black",
//           padding: "20px 25px",
//           border: "none",
//           borderRadius: "7px",
//           cursor: "pointer",
//           fontSize: "25px",
//           fontWeight: "bold",
//           width: "auto",
//           marginLeft: "auto",
//           transition: "background-color 0.3s ease"
//         }}
//         onMouseOver={(e) => (e.target.style.backgroundColor = "#ffd700")}
//         onMouseOut={(e) => (e.target.style.backgroundColor = "yellow")}
//       >
//         Courses
//       </button>
//     </header>
//   );
// }

// Header.jsx

import "../component/header.css"; // Import a separate CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <svg x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path
            fill="#29b6f6"
            fill-rule="evenodd"
            d="M24,4C12.96,4,4.01,12.954,4.01,24	c0,10.141,7.545,18.519,17.325,19.823v-4.03c0-1.136-0.716-2.158-1.793-2.519c-5.643-1.897-9.68-7.293-9.531-13.611	c0.181-7.692,6.444-13.74,14.133-13.662c7.662,0.078,13.849,6.316,13.849,14c0,0.72-0.056,1.44-0.164,2.151	c-1.713,11.291-16.412,17.637-16.492,17.672C22.208,43.939,23.097,44,24,44c11.04,0,19.99-8.954,19.99-20S35.04,4,24,4"
            clip-rule="evenodd"
          ></path>
          alt="logo"
        </svg>

        <div className="vertical-line"></div>

        <div className="header-text">
          <span className="white-text">S T O R I E S</span>
        </div>
      </div>

      <button className="courses-button">Courses</button>
    </header>
  );
}

export default Header;
