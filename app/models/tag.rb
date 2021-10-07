class Tag < ApplicationRecord
    validates :name, presence: true, uniqueness: {scope: :user_id}

    belongs_to :author,
        foreign_key: :user_id,
        class_name: "User"
    
end