import React, { Component } from 'react'
import { connect } from 'react-redux';

class Video extends Component {
    render() {
        const { newModule, newLeasson } = this.props;

        return (
            <div className="video">
                <strong>Módulo {newModule} - Leasson {newLeasson}</strong>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    newModule: store.activeReducer.newModule,
    newLeasson: store.activeReducer.newLeasson
});

export default connect(mapStateToProps)(Video);