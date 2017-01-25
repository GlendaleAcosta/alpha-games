var React = require('react');

class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="footer space-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item footer-inline-list">About</li>
                                <li className="list-inline-item footer-inline-list">Help</li>
                                <li className="list-inline-item footer-inline-list">Jobs</li>
                                <li className="list-inline-item footer-inline-list">Press</li>
                                <li className="list-inline-item footer-inline-list">Legal</li>
                                <li className="list-inline-item footer-inline-list">Blog</li>
                                <li className="list-inline-item footer-inline-list">Twitter</li>
                                <li className="list-inline-item footer-inline-list">Facebook</li>
                            </ul>
                        </div>
                        <div className="col-md-12 text-center">
                            <p className="small m-btm-0">&copy; Copyright 2017. Alpha Games Inc. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Footer;