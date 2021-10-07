export const fetchNoteTags = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/note_tags'
    })
}

export const fetchNoteTag = note_tagId => {
    return $.ajax({
        method: 'GET',
        url: `api/note_tags/${note_tagId}`
    })
}

export const createNoteTag = note_tag => {
    return $.ajax({
        method: 'POST',
        url: 'api/note_tags',
        data: {note_tag}
    })
}

export const updateNoteTag = note_tag => {
    return $.ajax({
        method: 'PATCH',
        url: `api/note_tags/${note_tag.id}`,
        data: {note_tag}
    })
}

export const deleteNoteTag = note_tagId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/note_tags/${note_tagId}`
    })
}