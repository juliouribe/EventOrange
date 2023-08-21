class Api::EventsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find_by(id: params[:id])
    render :show
  end

  def create
    # Look up logged in user id when creating events.
    @event = Event.new(events_params)
    @event.user_id = current_user.id
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by(id: params[:id])
    if @event.update(events_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find_by(id: params[:id])
    @event.destroy
    render json: event
  end

  private
  def events_params
    params.require(:event).permit(:title, :body, :location, :capacity, :start_time, :end_time)
  end
end
