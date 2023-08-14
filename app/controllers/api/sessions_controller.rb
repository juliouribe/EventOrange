class Api::SessionsController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def show
    @user = current_user
    if @user
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    email = params[:email]
    password = params[:password]
    @user = User.find_by_credentials(email, password)
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: { errors: 'The provided credentials were invalid'}, status: 422
    end
  end

  def destroy
    logout
    # Return an empty object with just headers.
    head :no_content
  end
end
