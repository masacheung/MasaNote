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
        <span className="ql-formats">
            <select className="ql-header" defaultValue="3">
                <option value="1">Large header</option>
                <option value="2">Medium header</option>
                <option value="3">Small header</option>
            </select>

            <select className="ql-font" defaultValue="Sans-Serif">
                <option value="Sans-Serif">Sans-Serif</option>
                <option value="Serif">Serif</option>
                <option value="Monospace">Monospace</option>
                <option value="Script">Script</option>
            </select>
            
            <select className="ql-size" defaultValue="small">
                <option value="small">12</option>
                <option value="medium">16</option>
                <option value="large">24</option>
            </select>
        </span>
        
        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic"/>
            <button className="underline"/>
        </span>
    </div>
)

export default EditorToolbar;