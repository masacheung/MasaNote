import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import NavContainer from "./mainnav/nav_container";
import NotesIndexContainer from "./notes/notes_index_container"

const Main = () => {
    return (
        <div>
            <Switch>
                <Route component={NavContainer}/>
            </Switch>
            <Route path="/notes" component={NotesIndexContainer}/>
        </div>
    )
}

export default Main;