import React from 'react';


const HomeCard = (props) => (
    <div className="col-12 col-sm-4">
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top rounded mx-auto d-block" style={{ paddingTop: '3px', width: '100px', height: '100px' }} src="https://agendor-blog-uploads.s3.sa-east-1.amazonaws.com/2016/09/01201555/automatizacao-de-tarefas.jpg" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>

                <button className="btn btn-primary" onClick={props.action}>Entrar</button>
            </div>
        </div>


    </div>

);

export default HomeCard;

