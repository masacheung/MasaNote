import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import NavContainer from "./mainnav/nav_container";
import NotesIndexContainer from "./notes/notes_index_container";
import NotebooksIndexContainer from "./notebooks/notebooks_index_container";
import EditorContainer from "./editor/editor_container";
import NotebookShowContainer from "./notebooks/notebook_show_container";
import TagsIndexContainer from "./tags/tags_index_container";

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path="/notebooks/:notebookId" component={NavContainer}/>
                <Route component={NavContainer}/>
            </Switch>

            <Route exact path="/notebooks" component={NotebooksIndexContainer}/>
            <Route path="/notebooks/:notebookId" component={NotebookShowContainer}/>
            <Route path="/notebooks/:notebookId/:noteId" component={EditorContainer}/>
            <Route path="/notes" component={NotesIndexContainer}/>
            <Route path="/notes/:noteId" component={EditorContainer}/>
            <Route path="/tags" component={TagsIndexContainer} />
        </div>
    )
}

export default Main;