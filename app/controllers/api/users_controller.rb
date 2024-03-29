class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']
  before_action :require_logged_in, only: [:purchased_events, :liked_events, :hosted_events]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def purchased_events
    @events = current_user.purchased_events
    render 'api/events/index'
  end

  def liked_events
    @events = current_user.liked_events
    render 'api/events/index'
  end

  def hosted_events
    @events = current_user.events
    render 'api/events/index'
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
