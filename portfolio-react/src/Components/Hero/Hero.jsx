import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
	return (
		<div id="home" className="hero">
			{/* <img src={profile_img} alt="profile_picture" height={400} width={300} /> */}
			<h1>
				<span>I'm Sergelenbaatar, </span>student of Erxes Academy
			</h1>
			<p>I'm currently learning HTML, CSS, JavaScript and React.</p>
			<div className="hero-action">
				<div className="hero-connect">
					<AnchorLink className="anchor-link" offset={50} href="#contact">
						Connect with me
					</AnchorLink>
				</div>
				<div className="hero-resume">My resume</div>
			</div>
		</div>
	);
};

export default Hero;
