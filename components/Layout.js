import NavBar from "./Navbar";
import Head from "next/head";

const Layout = ({children}) => (
    <>
    <Head>
        <title>Caruso - Mi Portfolio</title></Head>
    <NavBar />
    <main className="containter py-4">
    {children}
    </main> 
    </>
)
export default Layout;