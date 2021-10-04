import React from "react";
import { Link } from "react-router-dom"

export default class NotebooksIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchNotebooks();
    }


    render() {
        if(!this.props.notebooks) {
            return (
                <div>
                    <h1>Notebooks</h1>
                    <h2>{this.props.notebooks.length} notebook</h2>
                </div>
            )
        }

        return (
            <div className="notebooks-index">
                <div className="notebooks-index-header">
                    <h1>Notebooks</h1>
                    <div className="notebooks-index-notebooks">
                        <h2>{this.props.notebooks.length} notebook</h2>
                    </div>
                </div>
                <ul className="notebooks-index-sub-header"> 
                    <li>
                        <div className="sub-header-title">TITLE</div>
                        <div className="sub-header-created">CREATED BY</div>
                        <div className="sub-header-updated">UPDATED</div>
                        <div className="sub-header-actions">ACTIONS</div>
                    </li>
                </ul>

                <div className="notebooks-index-allnotebooks">
                    {this.props.notebooks.map((notebook => <li>{notebook.name}</li>))}
                </div>
            </div>
        );
    }
}