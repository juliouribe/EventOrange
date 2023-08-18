class Api::EventsController < ApplicationController
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

  end

  def update

  end

  def destroy

  end

  private
  def events_params
    params.require(:event).permit(:title, :body, :location, :capacity, :start_time, :end_time)
  end
end
