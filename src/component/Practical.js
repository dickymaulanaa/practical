import React from "react";
import "../css/practice.css";

function Practical() {
	return (
		<>
			<div className="container-web">
				<div className="d-flex navbarr ">
					<div className="navbar-0 w-25 ">
                              <img src="https://icon-library.com/images/health-food-icon/health-food-icon-17.jpg" className="ms-5 mt-3"/>
                         </div>
					<div className="navbar-0 w-25 ">
                         <div className="d-flex p-2">
						<i className="fas fa-search ms-2 me-2 mt-2" />
						<div className="d-flex flex-column ">
							<span className="labelNav">Discover</span>
							<span className="hintNav"> lorem ipsum Lorem Ipsum is simply dummy </span>
						</div>
                              </div>
					</div>
					<div className="navbar-0 w-25 ">
                         <div className="d-flex p-2">
						<i className="fas fa-play ms-2 me-2 mt-2" />
						<div className="d-flex flex-column ">
							<span className="labelNav">Watch</span>
							<span className="hintNav"> lorem ipsum Lorem Ipsum is simply dummy </span>
						</div>
                              </div>
					</div>
					<div className="navbar-0 w-25 ">
                              <div className="d-flex p-2">
						<i className="fas fa-heart ms-2 me-2 mt-2" />
						<div className="d-flex flex-column ">
							<span className="labelNav">Detox</span>
							<span className="hintNav"> lorem ipsum Lorem Ipsum is simply dummy </span>
						</div>
                              </div>
					</div>
				</div>
				<div className="mt-5 boxFormDetox d-flex justify-content-center">
					<div className="formDetox">
						<div className="labelForm mt-1 d-flex flex-column align-items-center justify-content-center ">
							<span style={{ color: "rgb(9, 241, 86)" }}>The Decision Detox</span>
							<span>start tonight with your</span>
							<span>personalised meal plan.</span>
						</div>
						<div className="isiForm ">
							<div class="py-3 px-5">
								<label for="cooking-for" class="form-label">
									How many people are you cooking for?
								</label>
								<select class="form-select" aria-label="Default select example">
									<option selected>Select</option>
									<option value="1">2 people</option>
									<option value="2">3 people</option>
									<option value="3">4 people</option>
								</select>
							</div>
							<div class="mb-3 py-3 px-5">
								<label for="cooking-style" class="form-label">
									What's your cooking style?
								</label>
								<select class="form-select" aria-label="Default select example">
									<option selected>Select</option>
									<option value="1">Low calorie food</option>
									<option value="2">Low calorie food</option>
									<option value="3">Low calorie food</option>
								</select>
							</div>
							<div class="mb-3 py-3 px-5">
								<label for="favorite-cuisine" class="form-label">
									Choose your favorite cuisine?
								</label>
								<select class="form-select" aria-label="Default select example">
									<option selected>Select</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div className="d-flex justify-content-center pb-5">
								<button className="btn-form  ">Generate Plan</button>
							</div>
						</div>
					</div>
				</div>
				<div className="header-1"></div>
				<div className="backgorundForm"></div>
			</div>
		</>
	);
}

export default Practical;
