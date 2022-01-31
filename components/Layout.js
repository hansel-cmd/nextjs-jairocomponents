import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <div className="p-5 p-lg-0 pt-lg-5 mt-4">
                {children}
            </div>
        </>
    );
}

export default Layout;