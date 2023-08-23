json.extract! event, :id, :title, :body, :host_id, :capacity, :location, :address, :start_time, :end_time, :created_at
json.photo_url event.photo.attached? ? url_for(event.photo) : nil
json.host_name event.host.first_name + ' ' + event.host.last_name
