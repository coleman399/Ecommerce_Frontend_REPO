import React, {Component} from 'react';
import './App.css';


const homePage = (props) => {
        return (
                <div className="container-fluid">
                <br/>
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-10">
                    </div>
                    <div className="col-1"/>
                </div>
                <br/>
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-7">
                <div className="container">
                    <div className="row">
                        
                    <br/>
                    </div>
                    <br/>
                </div>
                <div className="row">
                    <div className="col-1">
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <VideosPanel {...this.state} searchVideo={this.searchVideo}/>
                </div>
                <div className="col-1"/>
                </div>
            </div>
            )
        }

export default App;