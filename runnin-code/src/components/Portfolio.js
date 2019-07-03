import React from "react"

const Porfolio = () => {
  return (
	<section className="bg-faded" id="portfolio">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 text-center">
					<h2 className="section-heading">Portfolio</h2>
					<h3 className="section-subheading text-muted">Personal &amp; Professional Projects and Courses</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 col-sm-6 portfolio-item">
					<div className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
						<div className="portfolio-hover">
							<div className="portfolio-hover-content">
								<i className="fa fa-plus fa-3x"></i>
							</div>
						</div>
						<img className="img-fluid" src="../img/portfolio/01-spectacle-thumbnail.jpg" alt=""/>
					</div>
					<div className="portfolio-caption">
						<h4>Spectacles by Snapchat </h4>
						<p className="text-muted">HTML Emails</p>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 portfolio-item">
					<div className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
						<div className="portfolio-hover">
							<div className="portfolio-hover-content">
								<i className="fa fa-plus fa-3x"></i>
							</div>
						</div>
						<img className="img-fluid" src="../img/portfolio/02-inside-track-thumbnail.png" alt="" />
					</div>
					<div className="portfolio-caption">
						<h4>Inside Track</h4>
						<p className="text-muted">Wordpress Site</p>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 portfolio-item">
					<div className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
						<div className="portfolio-hover">
							<div className="portfolio-hover-content">
								<i className="fa fa-plus fa-3x"></i>
							</div>
						</div>
						<img className="img-fluid" src="../img/portfolio/03-github-battle-thumbnail.png" alt=""/>
					</div>
					<div className="portfolio-caption">
						<h4>GitHub Battle</h4>
						<p className="text-muted">React Course</p>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
};

export default Porfolio;