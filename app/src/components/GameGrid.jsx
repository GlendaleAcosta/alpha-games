var React = require('react');

class GameGrid extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="container">
                    <h2 className="display-4">Featured Games</h2>
                </div>

                <div className="container space">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="img-fluid" src="../images/overwatch-test-img.jpg"/>
                            <p className="lead space-tiny">Overwatch</p>
                        </div>
                        <div className="col-md-2">
                            <img className="img-fluid" src="../images/overwatch-test-img.jpg"/>
                            <p className="lead space-tiny">Overwatch</p>
                        </div>
                        <div className="col-md-2">
                            <img className="img-fluid" src="../images/overwatch-test-img.jpg"/>
                            <p className="lead space-tiny">Overwatch</p>
                        </div>
                        <div className="col-md-2">
                            <img className="img-fluid" src="../images/overwatch-test-img.jpg"/>
                            <p className="lead space-tiny">Overwatch</p>
                        </div>
                        <div className="col-md-2">
                            <img className="img-fluid" src="../images/overwatch-test-img.jpg"/>
                            <p className="lead space-tiny">Overwatch</p>
                        </div>
                        <div className="col-md-2">
                            <img className="img-fluid" src="../images/overwatch-test-img.jpg"/>
                            <p className="lead space-tiny">Overwatch</p>
                        </div>

                        
                    </div>    
                </div>

            </div>
        );
    }
}

module.exports = GameGrid;