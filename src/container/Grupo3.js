import React, { Component } from 'react'
import Grupo3Form from '../ui/Grupo3Form';

export default class Grupo3 extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            grupo3: [

            ]
        }
        this.removeTarefa = (index) => {

            const grupo3 = this.state.grupo3.slice();
            grupo3.splace(index, 1);
            this.setState({ grupo3 });
        };
    }
    handleSubmit(e, { name, date, turno, tempo }) {
        e.preventDefault();
        var state = this.state;
        var myGrupo3 = {
            id: state.grupo3.length + 1,
            grupo3Name: name,
            grupo3Date: date,
            grupo3Turno: turno,
            grupo3Tempo: tempo
        }
        this.setState({ grupo3: state.grupo3.concat(myGrupo3) });
    }
    handleRemove(id) {

        var myGrupo3 = this.state.grupo3;
        myGrupo3.splice(id, 1)
        this.setState({ grupo3: myGrupo3 });
    }




    render() {
        return (
            <div className="container" style={{ marginTop: '5px' }}>
                <Grupo3Form submitHandler={this.handleSubmit} removeTarefa={this.removeTarefa} />
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
                        {this.state.grupo3.map((grupo3, index) => {
                            const onClickRemove = (e) => {
                                this.handleRemove(index);
                            }

                            return (
                                <tr key={grupo3.id}>
                                    <th scope="row">{grupo3.id}</th>
                                    <td>{grupo3.grupo3Name}</td>
                                    <td>{grupo3.grupo3Date}</td>
                                    <td>{grupo3.grupo3Turno}</td>
                                    <td>{grupo3.grupo3Tempo}</td>
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