export const fetchNotebooks = () => {
    return $.ajax({
        url: "/api/notebooks",
        method: 'GET'
    })
}

export const fetchNotebook = (notebookId) => {
    return $.ajax({
        url: `/api/notebooks/${notebookId}`,
        method: 'GET'
    })
}

export const createNotebook = (notebook) => {
    return $.ajax({
        url: "/api/notebooks",
        method: 'POST',
        data: {notebook}
    })
}

export const updateNotebook = (notebook) => {
    return $.ajax({
        url: `/api/notebooks/${notebook.id}`,
        method: 'PATCH',
        data: {notebook}
    })
}

export const deleteNotebook = (notebookId) => {
    return $.ajax({
        url: `/api/notebooks/${notebookId}`,
        method: 'DELETE'
    })
}