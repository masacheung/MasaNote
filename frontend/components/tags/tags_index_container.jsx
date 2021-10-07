import { connect } from "react-redux";
import { fetchTags, createTag, updateTag, deleteTag } from "../../actions/tag_actions";
import TagsIndex from "./tags_index";

const mSTP = (state) => {
    return{
        tags: Object.values(state.entities.tags),
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchTags: () => dispatch(fetchTags()),
        createTag: (tag) => dispatch(createTag(tag)),
        updateTag: (tag) => dispatch(updateTag(tag)),
        deleteTag: (tagId) => dispatch(deleteTag(tagId))
    }
}

export default connect(mSTP, mDTP)(TagsIndex);