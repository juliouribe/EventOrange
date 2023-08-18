json.extract! event, :id, :title, :body, :host_id, :capacity, :location, :start_time, :end_time
json.photo_url event.photo.attached? ? url_for(event.photo) : nil
