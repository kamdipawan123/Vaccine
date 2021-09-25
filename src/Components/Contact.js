import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const Contact = () => {
	return (
		<>
			<div className="contact_info">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-10 offset-lg-1 d-flex justify-content-between" >

							<div className="contact_info_item d-flex justify-content-start align-items-between">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
									<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
								</svg>
								<div className="contact_info_content">
									<div className="contact_info_title">
										Phone
									</div>
									<div className="contact_info_text">
										+91 1111111111
									</div>
								</div>


								<div className="contact_info_item d-flex justify-content-start align-items-between">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
										<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
									</svg>
									<div className="contact_info_content">
										<div className="contact_info_title">
											Email
										</div>
										<div className="contact_info_text">
											contactus@gmail.com
										</div>
									</div>

								</div>



								<div className="contact_info_item d-flex justify-content-start align-items-between">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
										<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
										<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
									</svg>
									<div className="contact_info_content">
										<div className="contact_info_title">
											Address
										</div>
										<div className="contact_info_text">
											Hyderabad
										</div>
									</div>

								</div>



							</div>
						</div>
					</div>
				</div>

				<div className="contact_form">
					<div className="container">
						<div className="row">
							<div className-="col-lg-10 offset-lg-1 ">
								<div className="contact_form_container py-5">
									<div className="contact_form_title">
										Contact Us
										<div />
										<form id="contact_form_me">

											<div className="contact_form_name d-flex justify-content-between align-items-between">
												<input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Your Name" required="true" />
												<input type="email" id="contact_form_email" className="contact_form_email input_field" placeholder="Your Email" required="true" />
												<input type="number" id="contact_form_phone" className="contact_form_phone input_field" placeholder="Your Phone Number" required="true" />
											</div>

											<div className="contact_form_text mt-5">
												<textarea className="text_field contact_form_message" placeholder="Message" cols="30" rows="10 ">
												</textarea>

											</div>

											<div className="contact_form_button">
												<button type="submit" className="button contact_submit_button">
													Submit
												</button>

											</div>


										</form>

									</div>

								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Contact;