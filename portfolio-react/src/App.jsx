import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import song from "../src/assets/song.mp3";

const App = () => {
	const audioRef = useRef(null);

	useEffect(() => {
		const audio = audioRef.current;

		// Эхлээд autoplay хийхийг оролдоно (mute-тай)
		audio.muted = true;
		audio.play().catch(() => {
			// blocked байвал gesture хүлээе
		});

		// Хэрэглэгчийн анхны үйлдэл дээр unmute хийгээд тоглуулна
		const enableSound = () => {
			audio.muted = false;
			audio.play();
			window.removeEventListener("click", enableSound);
			window.removeEventListener("keydown", enableSound);
		};

		window.addEventListener("click", enableSound);
		window.addEventListener("keydown", enableSound);

		return () => {
			window.removeEventListener("click", enableSound);
			window.removeEventListener("keydown", enableSound);
		};
	}, []);

	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<MyWork />
			<Contact />
			<Footer />

			{/* Дуу */}
			<audio ref={audioRef} src={song} loop preload="auto" />
		</div>
	);
};

export default App;
