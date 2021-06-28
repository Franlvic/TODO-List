import React, { Component } from 'react'
import Grupo2Form from '../ui/Grupo2Form';

export default class Grupo2 extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            grupo2: [

            ]
        }
        this.removeTarefa = (index) => {

            const grupo2 = this.state.grupo2.slice();
            grupo2.splace(index, 1);
            this.setState({ grupo2 });
        };
    }
    handleSubmit(e, { name, date, turno, tempo }) {
        e.preventDefault();
        var state = this.state;
        var myGrupo2 = {
            id: state.grupo2.length + 1,
            grupo2Name: name,
            grupo2Date: date,
            grupo2Turno: turno,
            grupo2Tempo: tempo
        }
        this.setState({ grupo2: state.grupo2.concat(myGrupo2) });
    }
    handleRemove(id) {

        var myGrupo2 = this.state.grupo2;
        myGrupo2.splice(id, 1)
        this.setState({ Grupo2: myGrupo2 });
    }




    render() {
        return (
            <div className="container" style={{ marginTop: '5px' }}>
                <Grupo2Form submitHandler={this.handleSubmit} removeTarefa={this.removeTarefa} />
                <table className="table table-hover" style={{ paddingTop: '75px' }}>
                    <thead >
                        <tr>
                            <th scope="col">Tarefas</th>
                            <th scope="col">Nome </th>
                            <th scope="col">Data</th>
                            <th scope="col">Turno</th>
                            <th scope="col">Tempo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.grupo2.map((grupo2, index) => {
                            const onClickRemove = (e) => {
                                this.handleRemove(index);
                            }

                            return (
                                <tr key={grupo2.id}>
                                    <th scope="row">{grupo2.id}</th>
                                    <td>{grupo2.grupo2Name}</td>
                                    <td>{grupo2.grupo2Date}</td>
                                    <td>{grupo2.grupo2Turno}</td>
                                    <td>{grupo2.grupo2Tempo}</td>
                                    <button type="button" className="btn btn-danger  btn-sm" onClick={onClickRemove}>Remove</button>



                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        );
    }
}