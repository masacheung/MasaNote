import React from 'react';

export default class NotesIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        return (
            <div>
                Notes
            </div>
        )
    }
}
