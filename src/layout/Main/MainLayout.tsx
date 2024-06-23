import { ReactNode } from "react"
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

const Layout = ({ children } : { children: ReactNode }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
