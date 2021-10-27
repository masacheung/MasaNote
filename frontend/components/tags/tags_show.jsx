import React from 'react';
import TagsNotesList from './tags_notes_list';

export default class TagsShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchTag(this.props.match.params.tagId);
        this.props.fetchNotes();
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.tagId !== prevProps.match.params.tagId){
            this.props.fetchTag(this.props.match.params.tagId);
        }
    }

    render(){
        const notes = Object.values(this.props.notes);
        let tagsNote = [];

        notes.forEach(note => {
            note.tags.forEach(tag => {
                if(tag.id.toString() === this.props.match.params.tagId){
                    tagsNote.push(note);
                }
            })
        })

        let singleTag;
        if(tagsNote.length <= 1){
            singleTag = "tag";
        }else {
            singleTag = "tags";
        }


        let tag;
        if(!this.props.tag){
            tag = "Tag";
        }else {
            tag = this.props.tag.name;
        }

        return (
            <div className="notes-index">
                <div className="notes-index-header">
                    <div className="notes-index-img-notes">
                        <img src={window.tagimg} className="notes-index-img"/> {tag}
                    </div>
                    <div className="notes-index-count">{tagsNote.length} {singleTag}</div>
                </div>
                <div className="notes-index-content">
                    <TagsNotesList notebooks={this.props.notebooks} notes={tagsNote} tagId={this.props.match.params.tagId} history={this.props.history} currentUser={this.props.currentUser} createNote={this.props.createNote} fetchNotes={this.props.fetchNotes}/>
                </div>
            </div>
        );
    }
}