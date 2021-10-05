import React from "react";
import { Quill } from "react-quill";

const Size = Quill.import("formats/size");
Size.whitelist = ["small", "medium", "large"];
Quill.register(Size, true);

const Font = Quill.import("formats/font");
Font.whitelist = ["Sans-Serif", "Serif", "Monospace", "Script"];
Quill.register(Font, true);

export const format = [
    "header",
    "font",
    "size",
    "strike",
    "bold",
    "italic",
    "underline",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "ident",
    "link",
    "color",
    "code-block"
];

const EditorToolbar = ({ showToolbar }) => (
    <div>
        
    </div>
)

export default EditorToolbar;