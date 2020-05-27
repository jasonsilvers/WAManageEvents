import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/events">Events</Link>

            </div>
        </div>
    );
};

export default Navbar;
