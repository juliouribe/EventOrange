# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# Transform responses to camelCase for frontend consumption.
Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true
