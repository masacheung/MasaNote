class Note < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :author,
        foreign_key: :user_id,
        class_name: "User"

end