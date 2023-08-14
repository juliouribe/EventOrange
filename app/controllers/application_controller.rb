class ApplicationController < ActionController::API
  before_action :snake_case_params

  # Transform params into snake_case for backend consumption.
  def snake_case_params
    params.deep_transform_keys!(&:underscore)
  end
end
