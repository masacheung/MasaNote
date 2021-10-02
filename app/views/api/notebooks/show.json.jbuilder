json.notebook do
    json.partial! 'api/notebooks/notebook', notebook: @notebook
end

json.notes do
    json.array! @notes do |note|
        json.extract! note, :id
    end
end