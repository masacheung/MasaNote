import React from 'react';

export default class NotebookShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchNotebook(this.props.match.params.notebookId);
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.notebookId !== prevProps.match.params.notebookId){
            this.props.fetchNotebook(this.props.match.params.notebookId);
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.notebook.name}</h1>
                
                <h2>{this.props.notes.length} notes</h2>
            </div>
        )
    }
}