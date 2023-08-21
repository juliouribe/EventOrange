# == Schema Information
#
# Table name: events
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  host_id    :bigint           not null
#  location   :string           not null
#  capacity   :integer          not null
#  start_time :datetime         not null
#  end_time   :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Event < ApplicationRecord
  validates :title, :body, :location, :capacity, :start_time, presence: true
  validates :title, uniqueness: true
  validates :title,
    length: { in: 3..255}

  belongs_to :host,
    class_name: :User

  has_one_attached :photo,
    dependent: :destroy

  has_many :tickets,
    dependent: :destroy

  has_many :attendees,
    through: :tickets,
    source: :user

  has_many :likes,
    dependent: :destroy

  has_many :fans,
    through: :likes,
    source: :user
end
