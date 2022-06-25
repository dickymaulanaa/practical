import React, { useState } from "react";
import "../css/style.css";

function PlatNomor() {
     const [plat, setPlat] = useState("");
     const [pesan, setPesan] = useState("")

     const platValidation =() =>{
          const regex =/^[A-z]{1,2}\s{1}\d{0,4}\s{0,1}[A-z]{0,3}$/
          if(regex.test(plat)) {
               setPesan("Valid")
          }else if( !regex.test(plat) ){
               setPesan("Tidak Valid")
          }else{
               setPesan(" ")
          }
     }
     const handlePlat = (e) =>{
          setPlat(e.target.value)
     }
	return (
		<div className="container  ">
			<div className="formPlat border d-flex justify-content-center align-items-center">
					<input type="text" 
                         placeholder="input plat no"
                         value={plat}
                         onChange={handlePlat}
                         />
					<button onClick={platValidation}>Check</button>
                         {pesan}
			</div>
		</div>
	);
}

export default PlatNomor;
