import React, {Component} from 'react';

class KeyPadComponent extends Component {
    render() {
        return(
            <div className="button">
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>






            </div>

        )



    }


}