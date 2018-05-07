class Comment < ApplicationRecord
  belongs_to :article

  def identifier
    "comment_#{id}"
  end
end
