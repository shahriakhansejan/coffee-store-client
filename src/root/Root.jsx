
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Home/Nav';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;