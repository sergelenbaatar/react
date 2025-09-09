import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.png";
import profile_img from "../../assets/profile.png";
const About = () => {
	return (
		<div id="about" className="about">
			<div className="about-title">
				<h1>
					About me <menu type="context"></menu>
				</h1>
				<img src={theme_pattern} alt="theme" />
			</div>
			<div className="about-sections">
				<div className="about-left">
					<img src={profile_img} alt="" width={210} height={300} />
				</div>
				<div className="about-right">
					<div className="about-para">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus molestiae in repudiandae eveniet quidem, quia
							provident neque minus cupiditate voluptatibus?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
							consequatur deleniti et adipisci suscipit in?
						</p>
					</div>
					<div className="about-skills">
						<div className="about-skill">
							<p>HTML & CSS</p>
							<hr style={{ width: "80%" }} />
						</div>
						<div className="about-skill">
							<p>React JS</p>
							<hr style={{ width: "50%" }} />
						</div>
						<div className="about-skill">
							<p>JavaScript</p>
							<hr style={{ width: "70%" }} />
						</div>
						<div className="about-skill">
							<p>Next JS</p>
							<hr style={{ width: "20%" }} />
						</div>
					</div>
				</div>
			</div>
			<div className="about-achievements">
				<div className="about-achievement">
					<h1>10+</h1>
					<p>YEARS OF EXPERIENCE </p>
				</div>
				<hr />
				<div className="about-achievement">
					<h1>1+</h1>
					<p>PROJECTS COMPLETED </p>
				</div>
				<hr />
				<div className="about-achievement">
					<h1>0+</h1>
					<p>HAPPY CLIENTS </p>
				</div>
			</div>
		</div>
	);
};

export default About;
