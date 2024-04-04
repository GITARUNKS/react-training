// Functional component with Anonymous function
// import MenuList from "./MenuList";

//const Footer: React.FC = function() {
const Footer: React.FC = () => {
    const copyrightYear = new Date().getFullYear();
    const developerName = 'Arun';
    //must return JSX
    return (
        <footer className="text-center">
            <hr/>
            {/* <MenuList/> */}
            <p>&copy; Copyright {copyrightYear} | {developerName}</p>
        </footer>
    );
}

export default Footer;