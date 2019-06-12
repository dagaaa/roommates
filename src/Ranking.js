import React from 'react'
import Slider from "react-slick";
import SideBar from "./SideBar";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
const RankingEntry = (props) => {
    return (
        <div className="ranking-entry-wrapper">
            <h1 className={"position"}>{props.position}</h1>
            <img className={"avatar"} src={props.avatar} />
            <div className="name-title-container">
                <h1 className={"name"}>{props.name}</h1>
                <h1 className={"title"}>{props.title}</h1>
            </div>
            <h1 className={"points"}>{props.score + " points"}</h1>

        </div>
    );
};

const LegendEntry = (props) => {
    return (
        <div className="legend-entry-wrapper">
                <h1 className={"title"}>{props.title}</h1>
                <h1 className={"content"}>{props.content}</h1>
        </div>
    );
};


class Ranking extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return(
            <div className='body'>
                <SideBar/>
                <div className='content-container justified'>
                    <div className='ranking-table-wrapper justified center-alligned column-direction'>
                        <RankingEntry position={"1"} avatar={"http://lorempixel.com/32/31"} name={"Anna Nowak"} title={"Clean Queen"} score={540}/>
                        <RankingEntry position={"2"}  avatar={"http://lorempixel.com/32/32"} name={"Jan Kowalski"} title={"Clean King"} score={400}/>
                        <RankingEntry position={"3"} avatar={"http://lorempixel.com/32/33"} name={"Agnieszka Kowalska"} title={"Clean Queen"} score={250}/>
                        <RankingEntry position={"4"}  avatar={"http://lorempixel.com/33/32"} name={"Adam Kowalski"} title={"Clean King"} score={200}/>
                        <RankingEntry position={"5"}  avatar={"http://lorempixel.com/33/33"} name={"Janina Nowak"} title={""} score={10}/>
                    </div>

                    <div className='legend-wrapper'>
                        <h1 className="legend-title">Legend</h1>

                            <Slider {...settings}>
                              <LegendEntry title={"Clean Queen"} content={lorem}/>
                              <LegendEntry title={"Clean King"} content={lorem}/>
                              <LegendEntry title={"Almost Clean King"} content={lorem}/>
                            </Slider>


                    </div>

                </div>


            </div>)

    }
}

export default Ranking;