import React from "react";

export default class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tagName: ""
        }

        this.deleteNoteTag = this.deleteNoteTag.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTagField = this.updateTagField.bind(this);
    }

    deleteNoteTag(tag_id) {
        const note_id = this.props.note.id;
        this.props.deleteNoteTag({note_id, tag_id})
    }

    updateTagField(e) {
        this.setState({tagName: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        const user_id = this.props.user_id;
        const name = this.state.tagName;
        const note_id = this.props.note.id;

        this.props.createTag({name, user_id})
            .then((res) => {
                const tag_id = res.tag.id;
                this.props.createNoteTag({note_id, tag_id});
            }
        )
        
    }

    componentDidMount(){
        this.props.fetchNotes();
    }


    render() {
        // const {note} = this.props;
        // if (!note){
        //     return null;
        // }

        // const noteTags = Object.values(this.props.noteTags);

        // const tagsList = noteTags.map(tag => {
        //     if (!tag) {
        //         return null;
        //     }else if (tag.note_id === note.id){
        //         return (
        //             <li className="tags-list-item" key={tag.id}>
        //                 {tag.name}
        //             </li>
        //         )
        //     }
        // })

        return (
            <div className="editor-tags">
                <div>
                    <img src={window.tagimg}/>
                </div>
                <ul className="editor-tags-list">
                    {/* {tagsList} */}
                </ul>
                <div className="dropdown-anchor">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" className="tag-input" value={this.state.tagName} onChange={this.updateTagField} placeholder="Add Tag"/>
                    </form>
                </div>
            </div>
        )
    }
}