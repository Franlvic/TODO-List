import React, { Component } from 'react'
import Grupo1Form from '../ui/Grupo1Form';

export default class Grupo1 extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            grupo1: [

            ]
        }
        this.removeTarefa = (index) => {

            const grupo1 = this.state.grupo1.slice();
            grupo1.splace(index, 1);
            this.setState({ grupo1 });
        };
    }
    handleSubmit(e, { name, date, turno, tempo }) {
        e.preventDefault();
        var state = this.state;
        var myGrupo1 = {
            id: state.grupo1.length + 1,
            grupo1Name: name,
            grupo1Date: date,
            grupo1Turno: turno,
            grupo1Tempo: tempo
        }
        this.setState({ grupo1: state.grupo1.concat(myGrupo1) });
    }
    handleRemove(id) {

        var myGrupo1 = this.state.grupo1;
        myGrupo1.splice(id, 1)
        this.setState({ Grupo1: myGrupo1 });
    }




    render() {
        return (
            <div className="container" style={{ marginTop: '5px' }}>
                <Grupo1Form submitHandler={this.handleSubmit} removeTarefa={this.removeTarefa} />
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
                        {this.state.grupo1.map((grupo1, index) => {
                            const onClickRemove = (e) => {
                                this.handleRemove(index);
                            }

                            return (
                                <tr key={grupo1.id}>
                                    <th scope="row">{grupo1.id}</th>
                                    <td>{grupo1.grupo1Name}</td>
                                    <td>{grupo1.grupo1Date}</td>
                                    <td>{grupo1.grupo1Turno}</td>
                                    <td>{grupo1.grupo1Tempo}</td>
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