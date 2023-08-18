json.array! @events.each do |event|
  json.partial! 'event', event: event
end
