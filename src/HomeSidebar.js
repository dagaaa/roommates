import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card, UncontrolledCollapse} from 'reactstrap';
import girl from './girl.png';
import {Checkbox} from 'antd';
import 'antd/dist/antd.css';

class HomeSidebar extends Component {
    // state = {
    //     current: "Home-Me",
    //     homemembers: ["Me", "Ania"],
    //     flatmates: ["Me", "Zuzia", "Ania"],
    //
    // };

    state = {
        home: "Home",
        member: "Me",
        done: [false, true, false, false, false, false],
        current: "Home-Me",
        homemembers: ["Me", "Ania"],
        flatmates: ["Me", "Zuzia", "Ania"],
        dutiesToday: ["Clean the kitchen", "Vacum"],
        dutiesWeek: ["Wash dishes", "Clean the room", "Clean the toilet", "Clan windows"],
        disabled: false,
        Medone: [false, true, false, false, false, false]


    };


    onClick(home, member) {
        this.setState({current: home + "-" + member, home: home, member: member});
        var overview = {
            "Home": [
                {
                    "name": "Me",
                    "done": [false, true, false, false, false, false],
                    "dutiesToday": ["Clean the kitchen", "Vacum"],
                    "dutiesWeek": ["Wash dishes", "Clean the room", "Clean the toilet", "Swap"]
                },
                {
                    "name": "Ania",
                    "done": [true, false, true, false, false, true],
                    "dutiesToday": ["Clean the kitchen", "Clean the toilet"],
                    "dutiesWeek": ["Wash dishes", "Clean the room", "Vacum", "Do the laundry"]
                },
            ],
            "Flat": [
                {
                    "name": "Me",
                    "done": [false, true, false, false, false, false],
                    "dutiesToday": ["Clean the kitchen", "Vacum"],
                    "dutiesWeek": ["Wash dishes", "Clean the room", "Clean the toilet", "Swap"]
                },
                {
                    "name": "Ania",
                    "done": [false, true, false, false, false, false],
                    "dutiesToday": ["Clean the kitchen", "Clean the toilet"],
                    "dutiesWeek": ["Wash dishes", "Clean the room", "Vacum", "Do the laundry"]
                },
                {
                    "name": "Zuzia",
                    "done": [false, false, true, false, true, false],
                    "dutiesToday": ["Clean the kitchen", "Clean the toilet"],
                    "dutiesWeek": ["Wash dishes", "Clean the room", "Vacum", "Do the laundry"]
                },
            ]

        };

        if (home == "Home") {
            var i;
            var x, y, z;
            for (i in overview.Home) {
                x = overview.Home[i].dutiesToday;
                y = overview.Home[i].dutiesWeek;
                z = overview.Flat[i].done;

                if (overview.Home[i].name == member) {
                    this.setState({dutiesToday: x})
                    this.setState({dutiesWeek: y})
                    this.setState({done: z})
                }
                if (member != "Me") {
                    this.setState({disabled: true})
                } else {
                    this.setState({disabled: false})
                    this.setState({done:this.state.Medone})

                }

            }

        }
        if (home == "Flat") {
            var i;
            var x, y, z;
            for (i in overview.Flat) {
                x = overview.Flat[i].dutiesToday;
                y = overview.Flat[i].dutiesWeek;
                z = overview.Flat[i].done;

                if (overview.Flat[i].name == member) {
                    this.setState({dutiesToday: x});
                    this.setState({dutiesWeek: y});
                    this.setState({done: z})
                }
                if (member != "Me") {
                    this.setState({disabled: true})
                } else {
                    this.setState({disabled: false})
                    this.setState({done:this.state.Medone})

                }

            }

        }


    };

    onChange(index) {
        var x, i;
i = this.state.Medone;
        console.log('checked = ${e.target.checked}');
        if (this.state.member == "Me") {

            i[index] = !i[index];
            this.setState({Medone: i});
            this.setState({done:i})
console.log(i)
            console.log(this.state.Medone)

        }


    }


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
                                            onClick={() => this.onClick("Home", member)}>
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
                                    <button class="btn btn-sm box-sm "
                                            onClick={() => this.onClick("Flat", member)}>
                                        <img src={girl} width={40}/>
                                        {member}
                                    </button>))}</div>
                        </UncontrolledCollapse>
                    </div>
                </nav>
                <div className="outer-div">

                    <div className="box-center">
                        <h4 className="home-heading">Do it today!</h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm inside-box">
                                    <div className="container-fluid row-in-box">
                                        <div className="row row-in-box">
                                            <div className=" col-3 pt text-center ">5 pt</div>
                                            <div className=" col-8 title text-left">{this.state.dutiesToday[0]}<p
                                                className="description text-left">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.</p></div>
                                            <div className=" col-1 text-right">
                                                <Checkbox checked={this.state.done[0]}
                                                          disabled={this.state.disabled} onChange={()=>this.onChange(0)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm inside-box">
                                    <div className="container-fluid row-in-box">
                                        <div className="row row-in-box">
                                            <div className=" col-3 pt text-center ">5 pt</div>
                                            <div className=" col-8 title text-left">{this.state.dutiesToday[1]}<p
                                                className="description text-left">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.</p></div>
                                            <div className=" col-1 text-right">
                                                <Checkbox checked={this.state.done[1]}
                                                          disabled={this.state.disabled}
                                                          onChange={()=>this.onChange(1)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                    <div className="box-center">
                        <h4 className="home-heading">For this week</h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm inside-box">
                                    <div className="container-fluid row-in-box">
                                        <div className="row row-in-box">
                                            <div className=" col-3 pt text-center ">5 pt</div>
                                            <div className=" col-8 title text-left">{this.state.dutiesWeek[0]}<p
                                                className="description text-left">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.</p></div>
                                            <div className=" col-1 text-right">
                                                <Checkbox checked={this.state.done[2]}
                                                          disabled={this.state.disabled} onChange={()=>this.onChange(2)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm inside-box">
                                    <div className="container-fluid row-in-box">
                                        <div className="row row-in-box">
                                            <div className=" col-3 pt text-center ">5 pt</div>
                                            <div className=" col-8 title text-left">{this.state.dutiesWeek[1]}<p
                                                className="description text-left">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.</p></div>
                                            <div className=" col-1 text-right">
                                                <Checkbox checked={this.state.done[3]}
                                                          disabled={this.state.disabled} onChange={()=>this.onChange(3)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm inside-box">
                                    <div className="container-fluid row-in-box">
                                        <div className="row row-in-box">
                                            <div className=" col-3 pt text-center ">5 pt</div>
                                            <div className=" col-8 title text-left">{this.state.dutiesWeek[2]}<p
                                                className="description text-left">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.</p></div>
                                            <div className=" col-1 text-right">
                                                <Checkbox checked={this.state.done[4]}
                                                          disabled={this.state.disabled} onChange={()=>this.onChange(4)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm inside-box">
                                    <div className="container-fluid row-in-box">
                                        <div className="row row-in-box">
                                            <div className=" col-3 pt text-center ">5 pt</div>
                                            <div className=" col-8 title text-left">{this.state.dutiesWeek[3]}<p
                                                className="description text-left">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.</p></div>
                                            <div className=" col-1 text-right">
                                                <Checkbox checked={this.state.done[5]}
                                                          disabled={this.state.disabled}
                                                          onChange={()=>this.onChange(5)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

};
export default HomeSidebar;