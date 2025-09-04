import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({
  unidad,
  decena,
  centena,
  miles,
  diezMiles,
  cienMiles,
  millones,
}) => {
  return (
	<>
	
	
    <div className="d-flex flex-row-reverse justify-content-center gap-2 background">
      <div className="col-1 btn btn-secondary">
        <p>{unidad}</p>
      </div>

      <div className="col-1 btn btn-secondary">
        <p>{decena}</p>
      </div>

      <div className="col-1 btn btn-secondary">
        <p>{centena}</p>
      </div>
      <div className="col-1 btn btn-secondary">
        <p>{miles}</p>
      </div>

      <div className="col-1 btn btn-secondary">
        <p>{diezMiles}</p>
      </div>
      <div className="col-1 btn btn-secondary">
        <p>{cienMiles}</p>
      </div>
      <div className="col-1 btn btn-secondary ">
        <p>{millones}</p>
      </div>

      <div className="col-1 btn btn-secondary">
        <p className="p-0 m-0">
          <i className="fa-solid fa-clock reloj"></i>
        </p>
      </div>
    </div>
	  </>
  ); 
};

export default Home;
