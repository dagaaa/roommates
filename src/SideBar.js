import React from 'react';
import {Button, UncontrolledCollapse} from "reactstrap";
import girl from "./girl.png";

const SideBar = () => {
    return (
        <div className>
                <nav className="sidebarRank">
                    <div className="box">
                        <p className="boardheader">Board</p>
                        <Button color="primary" id="homeMembers" className=" btn-sm sidenavbutton">
                            Home
                        </Button>
                        <Button color="primary" id="flatmates" className=" btn-sm sidenavbutton">
                            Rented Flat
                        </Button>
                    </div>
                </nav>
        </div>
    );
};

export default SideBar;