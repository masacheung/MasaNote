@note_tags.each do |note_tag|
    json.set! note_tag.id do
        json.partial! 'note_tag', note_tag: note_tag
    end
end