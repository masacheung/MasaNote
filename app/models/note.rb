class Note < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :author,
        foreign_key: :user_id,
        class_name: "User"

    belongs_to :notebook,
        foreign_key: :notebook_id,
        class_name: "Notebook"

    has_many :note_tags,
        foreign_key: :note_id,
        class_name: "NoteTag",
        dependent: :destroy
    
    has_many :tags,
        through: :note_tags,
        source: :tag

end