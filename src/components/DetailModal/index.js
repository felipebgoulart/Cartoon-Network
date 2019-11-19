import React from 'react';
import { Modal } from 'react-bootstrap'

import './styles.css';

function DetailModal(props) {
  const { name, picture, description, episode, enName, country, horaStart, prodYear, classification, indicative, gender, direction  } = props.props;

    return (
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modal-container-color pr-4 ">
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-container-color">
          <div>
            <div className="title-cartoon">
              <div className="cartoon-image">
                <img alt="imagem" src={picture}></img>
              </div>
                <div className="episode">
                  <h3 className="main-title">{name}</h3>
                  <h3 className="sub-title">{enName}</h3>
                  <h6 className="episode-name">{episode}</h6>
                </div>
            </div>
          </div>
          <div className="title-day pl-5 mt-3">
            <h2>{props.week}, {props.day}</h2>
            <div className="description-cartoon">
              <p>{description}</p>
            </div>
          </div>
          <div className="divisor-color"></div>
          <div className="info-list pl-5 mt-3">
            <div className="item-div">
              Hora de Início/Fim: <span>{horaStart}</span>
            </div>
            <div className="item-div">
              Ano de Produção: <span>{prodYear}</span>
            </div>
            <div className="item-div">
              País de Origem: <span>{country}</span>
            </div>
            <div className="item-div">
              Classificação do Conteúdo: <span>{classification}</span>
            </div>
            <div className="item-div">
              Classificação Indicativa: <span>{indicative}</span>
            </div>
            <div className="item-div">
              Gênero: <span>{gender}</span>
            </div>
            <div className="item-div">
              Diretor: <span>{direction}</span>
            </div>
            <div className="item-div">
              Casting:
            </div>
          </div>
          <div className="divisor-color"></div>
        </Modal.Body>
      </Modal>
    );
}

export default DetailModal;