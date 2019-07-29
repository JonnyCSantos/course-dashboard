import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../../actions/index';

class Sidebar extends Component {
    constructor(props){
        super(props)

        this.state = {
            moduleActive: {},
            leassonActive: {},
            module: [
                {
                    id: 1,
                    name: 'First Module',
                    leassons: [
                        {id: 1, name: 'First Leasson'},
                        {id: 2, name: 'Second Leasson'},
                        {id: 3, name: 'Third Leasson'}
                    ]
                },
                {
                    id: 2,
                    name: 'Second Module',
                    leassons: [
                        {id: 3, name: 'First Leasson'},
                        {id: 4, name: 'Second Leasson'},
                        {id: 5, name: 'Third Leasson'}
                    ]
                },
            ]
        }
    }
    
    render() {
        const { clickButton } = this.props;

        return (
            <div className="sidebar">
                <ul className="sidebar__module">
                    {this.state.module.map((module) => (
                        <li className="sidebar__module-item" key={module.id}>
                            <strong>{module.name}</strong>
                            <ul className="sidebar__leassons">
                                {module.leassons.map((leasson) => (
                                    <li className="sidebar__leasson-item" onClick={() => clickButton(module.name, leasson.name)}>{leasson.name}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    newModule: store.activeReducer.newModule,
    newLeasson: store.activeReducer.newLeasson
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);