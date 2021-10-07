import * as TagApiUtil from "../util/tag_api_util";

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";

const receiveTags = (tags) => ({
    type: RECEIVE_TAGS,
    tags
})

const receiveTag = (tag) => ({
    type: RECEIVE_TAG,
    tag
})

const removeTag = (tagId) => ({
    type: REMOVE_TAG,
    tagId
})

export const fetchTags = () => dispatch => {
    return TagApiUtil.fetchTags()
        .then(tags => dispatch(receiveTags(tags)))
}

export const fetchTag = (tagId) => dispatch => {
    return TagApiUtil.fetchTag(tagId)
        .then(tag => dispatch(receiveTag(tag)))
}

export const createTag = (tag) => dispatch => {
    return TagApiUtil.createTag(tag)
        .then(tag => dispatch(receiveTag(tag)))
}

export const deleteTag = (tagId) => dispatch => {
    return TagApiUtil.deleteTag(tagId)
        .then(() => dispatch(removeTag(tagId)))
}