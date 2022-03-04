import { useRouter } from "next/router";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

    const router = useRouter()

    if (router.pathname != '/sign-up' && router.pathname != '/sign-in') {
        return (
            <>
                <Navbar></Navbar>
                <div className="py-5 p-lg-0 pt-lg-5 mt-4">
                    {children}
                </div>
            </>
        );
    }

    return (
        <>
            <div>
                {children}
            </div>
        </>
    );

}

export default Layout;