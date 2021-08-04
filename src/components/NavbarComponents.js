import {
    Link
} from "react-router-dom";

const NavbarBrand = ({ location, scrollTop, navbarLinkClick }) => {
    const logoPath = (<path d="M170.7,29.3C152.6,11.2,127.6,0,100,0S47.4,11.2,29.3,29.3C11.2,47.4,0,72.4,0,100c0,55.2,44.8,100,100,100
	c27.6,0,52.6-11.2,70.7-29.3c18.1-18.1,29.3-43.1,29.3-70.7S188.8,47.4,170.7,29.3z M61.3,164c-7.4,0-14.8,0.8-20.9-4.5
	c-4-3.5-6-8-6.5-13.1c-0.6-7.4-0.8-14.8-1.3-22.1c-0.2-3.3-0.7-6.6-1.5-9.7c-1.4-5.2-4.8-8.2-10.3-8.6c-0.3,0-0.7,0-1-0.1
	c-0.3,0-0.5-0.1-0.9-0.1V92.8c0.8-0.1,1.6-0.1,2.4-0.2c5.3-0.7,8.4-3.9,9.7-8.9c0.9-3.3,1.3-6.8,1.6-10.3c0.5-6.3,0.6-12.7,1.3-19
	c1.3-12.8,8.2-19.2,21-19.9c2-0.1,4.1,0,6.3,0v13.8c-0.8,0-1.7,0-2.5,0c-4.1,0-6.6,1.4-7.8,5.4c-1.2,3.7-1.9,7.7-2.3,11.6
	c-0.5,5.1-0.3,10.3-0.8,15.4c-0.7,8.1-4.2,14.6-12,18.7c3.9,1.8,6.7,4.4,8.7,7.8c3.2,5.4,3.7,11.5,4,17.5c0.2,4.8,0.4,9.6,0.9,14.4
	c0.2,2.1,1,4.2,1.7,6.3c1.3,3.5,3.8,5.2,7.6,5.1c0.9,0,1.7,0,2.7,0V164z M128.1,105.7c0,8.9-2.1,17.2-8.3,23.9
	c-9.6,10.5-21.5,13.6-35.1,10c-6.9-1.8-12.6-5.8-17.4-11.1c-0.3-0.4-0.7-0.8-1-1.2c-0.1-0.2-0.2-0.4-0.2-0.4
	c4.1-4.3,8.2-8.5,12.3-12.8c2.8,4,6.2,6.8,10.9,7.9c10,2.4,19-4.7,19-15c0-21.5,0-43,0-64.6v-2.5h19.7v2.2
	C128.1,63.3,128.1,84.5,128.1,105.7z M179.8,105.8c-6.6,0.7-10.5,3.9-11.5,10.5c-0.8,5.2-0.8,10.6-1.2,16
	c-0.4,5.2-0.4,10.6-1.3,15.7c-1.7,9.6-8,15.1-17.7,15.9c-3.1,0.2-6.2,0-9.4,0v-13.5c1,0,2,0,3,0c3.5,0,5.8-1.6,7.3-4.8
	c2.1-4.5,2.5-9.3,2.7-14.1c0.2-4.7,0.2-9.4,0.7-14c0.9-7.8,4-14.5,11.6-18.1c-0.1-0.2-0.1-0.4-0.1-0.4c-8.4-4.6-11.1-12.2-11.7-21.1
	c-0.3-5.6-0.4-11.2-0.9-16.8c-0.2-2.4-0.9-4.8-1.7-7.1c-1.5-4.2-3.9-5.8-8.4-5.8h-2.3V34.5c8.2-0.1,16.3-0.3,22.3,6.7
	c3.4,4,4.8,8.9,5.2,14c0.5,6.6,0.7,13.3,1.3,19.9c0.3,3.4,1,6.9,2.1,10.2c1.6,4.7,5.2,7.2,10.2,7.3c0.4,0,0.8,0.1,1.3,0.1v12.9
	C180.6,105.8,180.2,105.8,179.8,105.8z"/>);

    const getBrandTransparency = () => {
        switch (location.pathname) {
            case "/":
                return scrollTop <= 300;
            default:
                return false;
        }
    }

    let isBrandTransparent = getBrandTransparency();

    return (
        <Link className={"animated-opacity navbar-brand" + (isBrandTransparent && location.pathname === "/" ? " opacity-0" : "")} to="/" onClick={navbarLinkClick}>
            <div className="d-none d-sm-block">
                <div className="fw-bold text-primary b-0">Jeremy Mattheu D. Amon</div>
                <small className="text-muted">Full-Stack Developer</small>
            </div>
            <div className="d-sm-none">
                <svg className="navbar-logo-brand" viewBox="0 0 200 200" width="35" height="35">
                    {logoPath}
                </svg>
            </div>
        </Link>
    );
}

export default NavbarBrand;