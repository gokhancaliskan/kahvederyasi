import logo from "/logo.png";
import photo from "/kahvederyasi.jpg";

const Navbar = () => {
	return (
		<div>
			<div className="topline"></div>
			<a href="/" className="navbar">
				<img src={logo} alt="logo" />
			</a>

			<img src={photo} alt="photo" className="photo" />
		</div>
	);
};

export default Navbar;
