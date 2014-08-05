ds.charts = ds.charts || {}

ds.charts.epoch =
  (function() {
    var self = {}

    self.CHART_IMPL_TYPE = 'epoch'

    self.simple_line_chart = function(e, item, query) {
    }

    self.standard_line_chart = function(e, item, query) {
      $(e.selector + ' svg').epoch({
        type: 'line',
        data: query.chart_data('epoch')
      })
    }

    self.simple_area_chart = function(e, item, query) {
    }

    self.stacked_area_chart = function(e, item, query) {
    }

    self.donut_chart = function(e, item, query) {
    }

    self.process_series = function(series) {
      var result = {}
      if (series.summation) {
        result.summation = series.summation
      }
      result.label = series.target
      result.values = series.datapoints.map(function(point) {
                        return { x: point[1], y: point[0] }
                      })
      return result
    }

  })()
