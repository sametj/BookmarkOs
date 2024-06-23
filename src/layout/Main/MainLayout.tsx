import "./MainLayout.css";

const Header = () => {
	return (
		<section className='header'>
			<div className='logo'></div>
			<div className='date_time_container'>
				<div className='date'></div>
				<div className='time'></div>
			</div>
		</section>
	);
};

const ContentContainer = () => {
	// const [folders, setFolders] = useState([
	// 	{ name: "Folder 1" },
	// 	{ name: "Folder 2" },
	// 	{ name: "Folder 3" },
	// 	{ name: "Folder 4" },
	// 	{ name: "Folder 5" },
	// 	{ name: "Folder 6" },
	// ]);

	return (
		<section className='main_content_container'>
			<div className='main_content'>
				<button className='create_folder'>Create Folder</button>
			</div>
			<div></div>
		</section>
	);
};

const Layout = () => {
	return (
		<>
			<Header />
			<ContentContainer />
		</>
	);
};

export default Layout;
