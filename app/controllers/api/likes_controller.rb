class Api::LikesController < ApplicationController
  wrap_parameters include: Like.attribute_names
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    # Index route is used to show all likes for a current user.
    # There is no route for getting and showing all likes for all users and events.
    @likes = Like.where(user_id: current_user.id)
    render :index
  end

  def show
    @like = Like.find(user_id: current_user.id, event_id: params[:id])
    render :show
  end

  def create
    @like = Like.new
    @like.event_id = params[:event_id]
    @like.user_id = current_user.id
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find_by(event_id: params[:id])
    if @like
      @like.destroy
      # Return an empty object with just headers.
      head :no_content
    else
      render json: { errors: 'like not found' }, status: 404
    end
  end

  private
  def like_params
    params.require(:like).permit(:event_id)
  end
end
