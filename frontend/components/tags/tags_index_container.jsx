import { connect } from "react-redux";
import { fetchTags, createTag, deleteTag } from "../../actions/tag_actions";
import TagsIndex from "./tags_index";

const mSTP = (state) => {
    return{
        tags: Object.values(state.entities.tags)
    }
}

const mDTP = (dispatch) => {
    return {
        fetchTags: () => dispatch(fetchTags()),
        createTag: (tag) => dispatch(createTag(tag)),
        deleteTag: (tagId) => dispatch(deleteTag(tagId))
    }
}

export default connect(mSTP, mDTP)(TagsIndex);