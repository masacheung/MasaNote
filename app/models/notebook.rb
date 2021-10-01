class Notebook < ApplicationRecord
    validates :name, :user_id, presence: true
    validates :name, uniqueness: {scope: :user_id}

    belongs_to :author,
        foreign_key: :user_id,
        class_name: "User"

    has_many :notes,
        foreign_key: :notebook_id,
        class_name: "Note"

end