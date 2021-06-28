import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import { hashHistory } from 'react-router'

export default class Home extends Component {


    homeCardGrupo1 = {
        title: 'Grupo 1',

        action: () => hashHistory.push('/grupo1')
    }
    homeCardGrupo2 = {
        title: 'Grupo 2 ',

        action: () => hashHistory.push('/grupo2')
    }
    homeCardGrupo3 = {
        title: 'Grupo 3',

        action: () => hashHistory.push('/grupo3')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard title={this.homeCardGrupo1.title}
                        text={this.homeCardGrupo1.text}
                        action={this.homeCardGrupo1.action}

                    />
                    <HomeCard {...this.homeCardGrupo2} />
                    <HomeCard {...this.homeCardGrupo3} />


                </div>
            </div>

        );
    }
}
