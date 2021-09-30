import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import NavContainer from "./mainnav/nav_container";
import NotesIndexContainer from "./notes/notes_index_container";
import EditorContainer from "./editor/editor_container";

const Main = () => {
    return (
        <div>
            <Switch>
                <Route component={NavContainer}/>
            </Switch>
            <Route path="/notes" component={NotesIndexContainer}/>
            <Route path="/notes/:noteId" component={EditorContainer}/>
        </div>
    )
}

export default Main;