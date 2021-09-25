import React from 'react';
import logo1 from './images/logo1.png';


const About = () => {
	return (
		<div className="container emp-profile">
			<form method="">
				<div className="row">
					<div className="col-md-4">
						<div className="profile-img">
							<img src={logo1} alt="logo" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="profile-head">
							<h5>Cdac Hyderabad</h5>
							<h6>Vaccine Availabilty System </h6>
							<p className="profile-rating mt-3 mb-5">Ranking: <span>1/10</span></p>
							<ul className="nav nav-tabs" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="home">About</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="profile">Timeline</a>
								</li>

							</ul>

						</div>
					</div>
					<div className="col-md-2">
						<input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
					</div>

				</div>
				<div className="row">
					<div className="col-md-4">
						<div className="profile-work">
							<p>Work Link</p>
							<a href="https://www.google.com" target="_webdeveloper">Youtube</a><br />
							<a href="https://www.google.com" target="_webdeveloper">Instagram</a><br />
							<a href="https://www.google.com" target="_webdeveloper">telegram</a><br />
							<a href="https://www.google.com" target="_webdeveloper">Facebook</a><br />
							<a href="https://www.google.com" target="_webdeveloper">Github</a><br />
							<a href="https://www.google.com" target="_webdeveloper">Blog</a><br />
							<a href="https://www.google.com" target="_webdeveloper">Developer</a><br />

						</div>
					</div>



					<div className="col-md-8 pl-5 about-info">
						<div className="tab-content profile-tab" id="myTabContent">
							<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
								<div className="row">
									<div className="col-md-6">
										<label>Gatla Vineela Rani</label>
									</div>
									<div className="col-md-6">
										<p>210550381033</p>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-md-6">
										<label>Harish Dalu Barhate</label>
									</div>
									<div className="col-md-6">
										<p>210550381035</p>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Snehal Ghanshyam Jambhulkar</label>
									</div>
									<div className="col-md-6">
										<p>210550381037</p>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-md-6">
										<label>Pawan Kamdi</label>
									</div>
									<div className="col-md-6">
										<p>210550381039</p>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-md-6">
										<label>Kedar Abhijeet Narayan</label>
									</div>
									<div className="col-md-6">
										<p>210550381040</p>
									</div>
								</div>
							</div>


							<div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
								<div className="row">
									<div className="col-md-6">
										<label>Project Name</label>
									</div>
									<div className="col-md-6">
										<p>Vaccine Availabilty</p>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-md-6">
										<label>Team Lead</label>
									</div>
									<div className="col-md-6">
										<p>Pawan Kamdi</p>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Course name</label>
									</div>
									<div className="col-md-6">
										<p>edac</p>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-md-6">
										<label>Location</label>
									</div>
									<div className="col-md-6">
										<p>Hyd</p>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-md-6">
										<label>Technology</label>
									</div>
									<div className="col-md-6">
										<p>React Js And Spring boot</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>









			</form>


		</div>

	)
}
export default About;