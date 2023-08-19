json.set! @event.id do
  json.partial! 'event', event: @event
end
