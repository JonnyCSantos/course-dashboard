import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../../actions/index';

class Sidebar extends Component {
    render() {
        const { clickButton, module } = this.props;
        return (
            <div className="sidebar">
                <ul className="sidebar__module">
                    {module.map((module) => (
                        <li className="sidebar__module-item" key={module.id}>
                            <strong>{module.name}</strong>
                            <ul className="sidebar__leassons">
                                {module.leassons.map((leasson) => (
                                    <li className="sidebar__leasson-item" onClick={() => clickButton(module.name, leasson.name)} key={leasson.id}>{leasson.name}</li>
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
    newLeasson: store.activeReducer.newLeasson,
    module: store.dataReducer.module
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);