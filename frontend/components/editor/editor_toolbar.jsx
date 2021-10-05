import React from "react";
import { Quill } from "react-quill";

const Size = Quill.import("formats/size");
Size.whitelist = ["small", "medium", "large"];
Quill.register(Size, true);

