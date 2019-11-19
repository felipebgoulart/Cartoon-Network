import React from 'react';
import './styles.css';

import CartoonNetwork from '../../assets/logo.png';

export default function Footer() {
    return (
        <footer>            
            <div className="footer-desc col-12">
                <div className="footer-content container">
                    <div className="logoCN mt-5 ml-5 mr-5">
                        <img alt="Cartoon Network" src={CartoonNetwork}></img>
                    </div>
                    <div>
                        <p className="footer-text text-center mt-5">Jogos e Vídeos grátis do Ben 10, hora de aventura com Finn e Jake, <br/>Apenas um Show, A Turma da Mônica, O Incrível Mundo de Gumball, Steven Universo, Titio Avô, <br/>Toonix e muito mais </p>
                    </div>                 
                </div>
            </div>
            <div className="footer-helps col-12">
                <div className="container">
                    <div>
                        <ul>
                            <li><a href="/programacao">Guia para os Pais</a></li>
                            <li><a href="/programacao">Dicas de Segurança</a></li>
                            <li><a href="/programacao">Programação</a></li>
                            <li><a href="/programacao">Programação Efetivamente Veiculada</a></li>
                            <li><a href="/programacao">Programação Efetivamente Veiculada (HD)</a></li>
                            <li><a href="/programacao">Ajuda</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}