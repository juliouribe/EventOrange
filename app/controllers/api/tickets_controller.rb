class Api::TicketsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]
  wrap_parameters include: Ticket.attribute_names

  def index
    # Index route is to show all tickets for a current user.
    # There is no route for getting and showing all tickets for all users and events.
    @tickets = Ticket.where(user_id: current_user.id)
    puts @tickets
    render :index
  end

  def show
    @ticket = Ticket.find(params[:id])
    render :show
  end

  def create
    @ticket = Ticket.new(ticket_params)
    @ticket.user_id = current_user.id
    if @ticket.save
      render :show
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def destroy
    @ticket = current_user.tickets.find_by(id: params[:id])
    if @ticket
      @ticket.destroy
      # Return an empty object with just headers.
      head :no_content
    else
      render json: { errors: 'Ticket not found' }, status: 404
    end
  end

  private
  def ticket_params
    params.require(:ticket).permit(:price, :event_id, :quantity)
  end
end
