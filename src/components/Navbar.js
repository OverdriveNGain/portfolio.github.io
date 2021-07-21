const Navbar = () => {
    // return (
    //     <p>testing</p>
    // );
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-transparent fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="fw-bold text-primary b-0">Jeremy Mattheu D. Amon</div>
                    <small>Full-Stack Software Engineer</small>
                </a>
                <button className="navbar-toggler" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link px-3 text-primary" href="/">About Me</a>
                        <a className="nav-link px-3 text-primary" href="/">Portfolio</a>
                        <a className="nav-link px-3 text-primary" href="/">Testimonials</a>
                        <a className="nav-link px-3 text-primary" href="/">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;