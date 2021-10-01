json.notebook do
    json.partial! 'api/notebooks/notebook', notebook: @notebook
end

json.notes do
    @notes.each do |note|
        json.extract! note, :id
    end
end