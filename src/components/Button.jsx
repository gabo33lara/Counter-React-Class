import React from 'react';
import '../stylesheets/Button.css';

class Button extends React.Component {
    render() {
        return(
            <button className={this.props.isButtonClass ? this.props.text === 'Increase'  ? 'increase-btn' : 'decrease-btn' : 'reset-btn'} onClick={this.props.handleClick}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;