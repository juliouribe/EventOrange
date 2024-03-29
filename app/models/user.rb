# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#  last_name       :string           not null
#
class User < ApplicationRecord
  validates :email, :session_token, :first_name, :last_name, presence: true
  validates :email, :session_token, uniqueness: true
  validates :email,
    length: { in: 3..255},
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password,
    length: { in: 6..255}, allow_nil: true

  has_many :events,
    foreign_key: :host_id,
    dependent: :destroy

  has_many :tickets,
    dependent: :destroy

  has_many :purchased_events,
    through: :tickets,
    source: :event

  has_many :likes,
    dependent: :destroy

  has_many :liked_events,
    through: :likes,
    source: :event

  has_secure_password

  before_validation :ensure_session_token

  # SRE
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.authenticate(password)
      user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  private
  def generate_session_token
    loop do
      token = SecureRandom.urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end
end
