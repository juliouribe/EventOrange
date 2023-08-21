json.set! @ticket.id do
  json.partial! 'ticket', ticket: @ticket
end
