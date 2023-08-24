# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  event_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  validates :user_id, :event_id, presence: true
  validates_uniqueness_of :user_id, scope: :event_id

  belongs_to :user

  belongs_to :event
end
