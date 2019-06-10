import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card, UncontrolledCollapse} from 'reactstrap';
import girl from './girl.png';

class HomeSidebar extends Component {
    state = {
        current: "Home-Me",
        homemembers: ["Me", "Ania"],
        flatmates: ["Me", "Zuzia", "Ania"],

    };

    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="box">
                        <p className="boardheader">{this.state.current}</p>
                        <Button color="primary" id="homeMembers" className=" btn-sm sidenavbutton">
                            Home
                        </Button>
                        <UncontrolledCollapse toggler="#homeMembers">
                            <div className="btn-group-vertical">
                                {this.state.homemembers.map(member => (
                                    <button className="btn btn-sm box-sm "
                                            onClick={() => this.setState({current: "Home-" + member})}>
                                        <img src={girl} width={40}/>
                                        {member}
                                    </button>))}</div>
                        </UncontrolledCollapse>
                        <Button color="primary" id="flatmates" className=" btn-sm sidenavbutton">
                            Rented Flat
                        </Button>
                        <UncontrolledCollapse toggler="#flatmates">
                            <div class="btn-group-vertical">
                                {this.state.flatmates.map(member => (
                                    <button class="btn btn-sm box-sm " onClick={() => this.setState({current:"Flat-"+member})}>
                                        <img  src={girl}  width={40} />
                                        {member}
                                </button>))}</div>
                        </UncontrolledCollapse>
                    </div>
                </nav>

            </div>
        );
    }

};
export default HomeSidebar;