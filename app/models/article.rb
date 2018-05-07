class Article < ApplicationRecord
  has_many :comments, dependent: :destroy

  validates :title, presence: true,
                    length:   { minimum: 5 }
  validates :text,  presence: true,
                    length:   { minimum: 5 }

  def identifier
    "article_#{id}"
  end
end
