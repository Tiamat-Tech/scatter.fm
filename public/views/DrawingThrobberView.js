const DrawingThrobberView = Backbone.View.extend({
    render() {
        if (graphViewModel.get("isDrawing")) {
            $("#drawingThrobber").show();
            $("#drawStatus").text(`${scrobbleCollection.size()} scrobbles`);
        }
        else {
            $("#drawingThrobber").hide();
        }
    }
});
const drawingThrobberView = new DrawingThrobberView;
graphViewModel.on("change:isDrawing", (model, isDrawing) => drawingThrobberView.render());
