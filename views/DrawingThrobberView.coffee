window.DrawingThrobberView = Backbone.View.extend
  render: ->
    if graphViewModel.get "isDrawing"
      $("#drawingThrobber").show()
      $("#drawStatus").text "#{scrobbleCollection.size()} scrobbles"
    else
      $("#drawingThrobber").hide()

drawingThrobberView = new DrawingThrobberView
    
graphViewModel.bind "change:isDrawing", (model, isDrawing) ->
  drawingThrobberView.render()
