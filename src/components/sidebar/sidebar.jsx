import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButtonAction } from '../../actions/clickButtonAction';

class Sidebar extends Component {
    render() {
        const { clickButtonAction, module } = this.props;
        return (
            <div className="sidebar">
                <ul className="sidebar__module">
                    {module.map((module) => (
                        <li className="sidebar__module-item" key={module.id}>
                            <strong>{module.name}</strong>
                            <ul className="sidebar__leassons">
                                {module.leassons.map((leasson) => (
                                    <li className="sidebar__leasson-item" onClick={() => clickButtonAction(module.name, leasson.name)} key={leasson.id}>{leasson.name}</li>
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
    moduleActive: store.activeReducer.moduleActive,
    leassonActive: store.activeReducer.leassonActive,
    module: store.dataReducer.module
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButtonAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);