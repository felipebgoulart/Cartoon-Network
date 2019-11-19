import React ,{useEffect,useState}from 'react';
import { getHours } from 'date-fns'
import properties from '../../data/data';

import './styles.css';

import DetailModal from '../DetailModal'

import regularShow from '../../assets/regularShow.png';
import Jake from '../../assets/jake.png';
import Gumball from '../../assets/gumball.png';

export default function Schedule() {

    function formatHour(hour) {
        var hours = hour.toString();
        hours = "0" + hours + "h";
        hours = hours.slice(hours.length-3,4);
        return hours;
    }

    const [card, setCard] = useState([]);
    function insertCard() {
        for(var a = 0; a < 3; a++){
            var l = a;
            const desc = {
                id: l,
                hour: "",
                image: "",
                description: "Select a Date"
            }
            desc.id = proper[a].index;
            desc.hour = getHours(date) + min(a);
            desc.image = proper[a].picture;
            desc.description = proper[a].shortDesc;

            setCard(card => [...card,desc])
        }
    }

    //Remover Antes de Enviar
    function min(min) {
        if(min === 1){
            min = ":30";
        } else if(min === 2){
            min = ":45";
        } else {
            min = ":15";
        }
        return min;
    }

    useEffect(insertCard,[]);

    const [data, setData] = useState([]);
    function insertData(){
        for(var i=0; i < 24; i++) {
            var rest = i % 3
            var k = formatHour(i);
            const block = {
                id: i,
                hour: k,
                color: "blue",
                selected: ""
            }
            
            if(rest === 0){
                block.color = 'blue'
            }else if(rest === 1){
                block.color = 'pink'
            }else{
                block.color = 'yellow'
            }
            setData(data=> [...data,block])
        }
    }

    const [date, setDate] = useState(new Date());
    function updateDate() {
        setDate(new Date());
        setInterval(updateDate,1000000);
    }

    useEffect(insertData,[]);
    useEffect(updateDate,date);

    var weekDays = ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","domingo"];

    function WeekToDay(week) {
        switch(week){
            case 0:
                week = weekDays[0];
                break;
            case 1:
                week = weekDays[1];
                break;
            case 2:
                week = weekDays[2];
                break;
            case 3:
                week = weekDays[3];
                break;
            case 4:
                week = weekDays[4];
                break;
            case 5:
                week = weekDays[5];
                break;
            case 6:
                week = weekDays[6];
                break;
            default:
                week = 0;
                break;
        }
        return week;
    }

    const [week,setWeek] = useState(0);
    const [day,setDay] = useState(1);
    var weekDay = WeekToDay(week);
    function setState(){

        for(var i = 0; i < 24; i++){
            if(data[i].id === getHours(date)) {
                if(data[i].color === "blue"){
                    data[i].selected = "bgb";
                } else if(data[i].color === "pink"){
                    data[i].selected = "bgp";
                } else {
                    data[i].selected ="bgy";
                }
            }
        }

        if(day < 31){
            setDay(day + 1);
            if(week < 6){
                weekDay = WeekToDay(week);
                setWeek(week + 1);
            } else {
                setWeek(week - week);
            }
        } else {
            setDay(day - (day-1));
        }
    }                                        

    const [hourState,setHourState] = useState(getHours(date).toString() + "h");
    const [colorState,setColorState] = useState("blue");
    function handleCard(cards) {
        const { color, hour } = cards;
        setColorState(color);
        setHourState(hour);
        

        var min = 0;
        var g = [regularShow,Jake,Gumball]
        var n = ["Regular Show", "Adventure Time", "The amazing world of Gumball"]
        for(var t = 0; t < 3; t++){
            card[t].hour = hour.toString().slice(0,2) + ":" + (min += 15);
            card[t].image = g[t];
            card[t].description = n[t];
        }

    }

    const [modalShow, setModalShow] = useState(false);
    const [proper] = useState(properties);
    const [property, setProperty] = useState(0);

    function setModal(info) {
        setProperty(info);
        setModalShow(true);
    }

    return (

        <div id="scd">

            <DetailModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            props={property}
            day={day}
            week={weekDay}
            />

            <div className="yellowDiv bg-warning mt-3 position-relative"></div>
                <div className="scheduleDay position-relative">
                    <div className="weekDay">
                        <span className="ml-3">{weekDay} </span>
                        <span>{day}</span>
                    </div>
            </div>
            <div className="row">
                <div id="schedule" className="schedule">

                    {   
                        data.map( d =><button onClick={() => handleCard(d)} className={`hours ${d.color} ${d.selected}`}>{d.hour}</button>)
                    }

                    <button id="nxtDay" onClick={()=> {setState()}} className="nextDay"><i className="fas fa-angle-right fa-7x"></i></button>
                </div>

                <div id="sideInfo" className={`${colorState} col-5 mt-3`}>

                    <div className="text-center mt-3">
                        <h1 className="display-4">{hourState}</h1>
                    </div>

                    {
                        card.map(p => <div id="lines" onClick={() => setModal(proper[p.id])} className={` ${colorState} card row mt-3 mr-1 ml-1`}>
                            <div className="hora col-2">{p.hour}</div>
                            <div className="col-4"><img alt="Cartoon" src={p.image}></img></div>
                            <div className="descricao col-4">{p.description}</div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}