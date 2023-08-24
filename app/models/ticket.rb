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
#  quantity   :integer          default(1), not null
#
class Ticket < ApplicationRecord
  validates :price, :quantity, presence: true
  validates :quantity, numericality: { greater_than: 0 }
  validates_uniqueness_of :user_id, scope: :event_id

  before_validation :ensure_price

  belongs_to :user

  belongs_to :event

  def ensure_price
    self.price ||= 0
  end
end
