import React, { Component } from 'react';
import Card from '../Card';
import SliderModal from '../SliderModal';
import properties from '../../data/data';

import './styles.css';

class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: properties,
            property: properties[0],
            page: 0,
            sliderModalShow: false
        }
    } 

    nextProperty = () => {
        const newIndex = this.state.page+1;
        this.setState({
            property: properties[newIndex],
            page: newIndex,
            sliderModalShow: false
        })
    }

    prevProperty = () => {
        const newIndex = this.state.page-1;
        this.setState({
            property: properties[newIndex],
            page: newIndex,
            sliderModalShow: false
        })
    }

    callModal = (id) => {
        this.setState({
            sliderModalShow: true
        })
    }

    render() {
        const {properties, property, page} = this.state;

        return (
            <div className="main-slider">

            <SliderModal
            show={this.state.sliderModalShow}
            onHide={() => this.setState({sliderModalShow: false})}
            props={property}
            />

                <button className="controls left-control"
                        onClick={() => this.prevProperty()}
                        disabled={page === 0}
                ><i className="fas fa-chevron-left fa-4x"></i></button>
            
                <div className="page">
                    {
                    <div onClick={() => this.callModal(property.index)} className={`cards-slider active-slide-${property.index}`}>
                        <div className="cards-slider-wrapper" style={{
                            'transform': `translateX(-${property.index*(100/properties.length)}%)`
                        }}>
                            
                            <Card key={property.id} property={property} />
                            
                        </div>
                    </div>
                    }
                </div> 

                <button className="controls right-control"
                        onClick={() => this.nextProperty()} 
                        disabled={page === properties.length-1}
                ><i className="fas fa-chevron-right fa-4x"></i></button>
                
            </div>
        )
    }

}

export default Slider;