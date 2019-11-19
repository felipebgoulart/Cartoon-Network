import React from 'react';
import { Modal } from 'react-bootstrap'

import './styles.css';

function SliderModal(props) {
  const { name, picture, enName } = props.props;

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
                <div className="title-cartoon-pink">
                    <div className="cartoon-image-pink">
                        <img alt="imagem" src={picture}></img>
                    </div>
                    <div className="episode-pink">
                        <h3 className="main-title">{name}</h3>
                        <h3 className="sub-title">{enName}</h3>
                    </div>
                </div>
          </div>
          <div className="body-div">
              <div className="box-hour">
                  <div className="box-item text-center">
                      <div>Domingo</div>
                      <div>17</div>
                      <div className="time">23:30</div>
                  </div>
                  <div className="box-item text-center">
                      <div>Segunda</div>
                      <div>18</div>
                      <div className="time">17:30</div>
                  </div>
                  <div className="box-item text-center">
                      <div>Terça</div>
                      <div>19</div>
                      <div className="time">17:30</div>
                  </div>
                  <div className="box-item text-center">
                      <div>Quarta</div>
                      <div>20</div>
                      <div className="time">17:30</div>
                  </div>
                  <div className="box-item text-center">
                      <div>Quinta</div>
                      <div>21</div>
                      <div className="time">17:30</div>
                  </div>
                  <div className="box-item text-center">
                      <div>Sexta</div>
                      <div>22</div>
                      <div className="time">17:30</div>
                  </div>
                  <div className="box-item text-center">
                      <div>Sábado</div>
                      <div>23</div>
                      <div className="time">23:30</div>
                  </div>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    );
}

export default SliderModal;