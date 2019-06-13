import React from 'react'
import {Link} from 'react-router-dom';

class NewDuty extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('Task has been successfully added!');
    }

    render() {
        return (
            <div className='body'>
                <div className='content-container' align="center">
                    Add new duty
                    <div className='duty-wrapper'>
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormFields">
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="name">Duty name</label>
                                    <input type="text" id="name" className="FormField__Input"
                                           placeholder="e.g. Clean the floor" name="name"/>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Duty description</label>
                                    <input type="text" id="description" className="FormField__Input"
                                           placeholder="Enter task description" name="desc"/>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="duty_freq">Duty frequency</label>
                                    <div className="FormField3">
                                        <div><select name="freq" autoFocus>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select></div>
                                        <div className="FormField4">per</div>
                                        <div><select name="plec" autoFocus>
                                            <option value="day">day</option>
                                            <option value="week">week</option>
                                            <option value="month">month</option>
                                        </select></div>
                                    </div>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="duty_freq">Assignee</label>
                                    <div className="FormField3">
                                        <div><select name="freq" autoFocus>
                                            <option value="hm">Home - Me</option>
                                            <option value="ha">Home - Ania</option>
                                            <option value="fm">flat - Me</option>
                                            <option value="fz">flat - Zuzia</option>
                                            <option value="fa">flat - Ania</option>
                                        </select></div>
                                    </div>
                                </div>
                                <div className="FormField2">
                                    <div><input className="FormField__Checkbox" type="checkbox"
                                                name="hasAgreed"/> Rotate
                                        duties over roommates
                                    </div>
                                    <div><input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/> It is
                                        my private duty
                                    </div>
                                </div>


                                <div className="FormField">
                                    <button className="FormField__Button mr-20">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewDuty;
