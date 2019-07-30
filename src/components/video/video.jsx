import React, { Component } from 'react'
import { connect } from 'react-redux';

class Video extends Component {
    render() {
        const { moduleActive, leassonActive } = this.props;
        return (
            <div className="video">
                <strong>Módulo {moduleActive} - Leasson {leassonActive}</strong>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    moduleActive: store.activeReducer.moduleActive,
    leassonActive: store.activeReducer.leassonActive
});

export default connect(mapStateToProps)(Video);