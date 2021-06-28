import React from 'react';
import { useEffect, useState } from 'react';

const Grupo3Form = ({ submitHandler }) => {
    let _grupo3Name, _grupo3Date, _grupo3Turno, _grupo3Tempo;
    const handleSubmit = (e) => {


        submitHandler(e, {
            name: _grupo3Name.value,
            date: _grupo3Date.value,
            turno: _grupo3Turno.value,
            tempo: _grupo3Tempo.value
        });

        clearForm();

    }
    const clearForm = () => {
        _grupo3Name.value = '';
        _grupo3Date.value = '';
        _grupo3Tempo.value = '';
        _grupo3Turno.value = '';

    }


    return (
        <form onSubmit={handleSubmit} class="form-inline">

            <label className="sr-only" for="inlineFormInputName2">Name</label>
            <input type="text" ref={input => _grupo3Name = input} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" data-maxlength="6" required></input>

            <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
            <div className="input-group mb-2 mr-sm-2">

                <input type="date" ref={input => _grupo3Date = input} className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" required></input>
            </div>
            <div className="input-group mb-2 mr-sm-2">
                <label className="sr-only" for="inputTurno">Turno</label>
                <select ref={input => _grupo3Turno = input} id="inputTurno" class="form-control" required>

                    <option>Manhã</option>
                    <option>Tarde</option>
                    <option>Noite</option>
                </select>
            </div>
            <div className="input-group mb-2 mr-sm-2">

                <input type="time" ref={input => _grupo3Tempo = input} className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" required></input>
            </div>



            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>

    )
};


export default Grupo3Form;