var React = require('react');

class HomeHeader extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="jumbotron home-header">
                <div className="container">
                    <div className="row">


                        <div className="col-md-10 offset-md-1 row">

                            <div className="col-md-8">
                                <div className="header-featured-game">
                                    <h1>First Column</h1>
                                </div>
                            </div>

                            <div className="col-md-4 p-0-l">
                                <div className="header-featured-game-info">
                                    <h1>Second Column</h1>
                                </div>
                            </div>

                        </div>

                        
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = HomeHeader;