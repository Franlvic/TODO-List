import React, { Component } from 'react'
import Home from './Home';
import { Link } from 'react-router'

export default class ComponenteDePagina404 extends Component {
    render() {
        return (
            <div className="container" >
                <div className="row" >
                    <div className="col-sm">

                    </div>
                    <div className="col-sm" style={{ textAlign: 'center' }}>
                        <img src="https://image.freepik.com/vetores-gratis/pagina-de-erro-404-nao-encontrada_41910-364.jpg" alt="" />


                        <Link to='/' style={{ fontSize: '20px', border: '2px solid #4682B4', background: '#4682B4', color: '#fff' }} >Back Home</Link>


                    </div>
                    <div className="col-sm">

                    </div>
                </div>
            </div>



        );
    }
}