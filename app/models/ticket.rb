# == Schema Information
#
# Table name: tickets
#
#  id         :bigint           not null, primary key
#  price      :integer          default(0), not null
#  user_id    :bigint           not null
#  event_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Ticket < ApplicationRecord
  validates :price, presence: true, default: 0

  belongs_to :user

  belongs_to :event
end
