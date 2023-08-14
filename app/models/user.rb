# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, :username, :session_token, presence: true
  validates :email, :username, :session_token, uniqueness: true
  validates :username,
    length: { in: 3..30 },
    format: { without: URI::MailTo::EMAIL_REGEXP, message: "Cant be an email" }
  validates :email,
    length: { in: 3..255},
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password,
    length: { in: 6..255}, allow_nil: true

  has_secure_password

  before_validation :ensure_session_token

  # SRE
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
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
