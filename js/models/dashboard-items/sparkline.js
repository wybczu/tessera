ds.register_dashboard_item('sparkline', {
  display_name: 'Sparkline',
  icon: 'fa fa-image',
  category: 'chart',

  constructor: function(data) {
    'use strict'

    var self = limivorous.observable()
                         .extend(ds.models.item, {item_type: 'sparkline'})
                         .extend(ds.models.chart)
                         .build()

    if (data) {
      ds.models.chart.init(self, data)
      ds.models.item.init(self, data)
    }

    self.set_interactive(true)
    self.set_height(self.height || 1)

    self.toJSON = function() {
      return ds.models.chart.json(self, ds.models.item.json(self, {
        format: self.format,
        transform: self.transform
      }))
    }

    return self
  },

  data_handler: function(query, item) {
    var data  = query.chart_data('nvd3')[0].values.map(function(point) {
                  return { x: point[1], y: point[0] }
                })
    var chart = nv.models.sparklinePlus()


    console.log(data)

    d3.select('#' + item.item_id + ' svg')
      .datum(data)
      .transition()
      .duration(250)
      .call(chart)
  },

  template: ds.templates.models.sparkline,

  interactive_properties: []
                            .concat(ds.models.chart.interactive_properties,
                                    ds.models.item.interactive_properties)

})
