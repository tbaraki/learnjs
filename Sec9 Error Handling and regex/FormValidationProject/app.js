{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "Prometheus",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "type": "dashboard"
      }
    ]
  },
  "description": "This is a PI-Hole dashboard when using the https://github.com/eko/pihole-exporter Prometheus exporter",
  "editable": true,
  "gnetId": 10176,
  "graphTooltip": 1,
  "id": 14,
  "iteration": 1591390410500,
  "links": [],
  "panels": [
    {
      "collapsed": false,
      "datasource": null,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 0
      },
      "id": 60,
      "panels": [],
      "title": "🍓PI-Hole",
      "type": "row"
    },
    {
      "cacheTimeout": null,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {},
          "mappings": [
            {
              "id": 0,
              "op": "=",
              "text": "Disabled",
              "type": 1,
              "value": "0"
            },
            {
              "id": 1,
              "op": "=",
              "text": "Enabled",
              "type": 1,
              "value": "1"
            }
          ],
          "nullValueMode": "connected",
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "#d44a3a",
                "value": null
              },
              {
                "color": "rgba(237, 129, 40, 0.89)",
                "value": 0
              },
              {
                "color": "#299c46",
                "value": 1
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 2,
        "w": 4,
        "x": 0,
        "y": 1
      },
      "id": 84,
      "interval": null,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "background",
        "fieldOptions": {
          "calcs": [
            "lastNotNull"
          ]
        },
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        }
      },
      "pluginVersion": "7.0.3",
      "targets": [
        {
          "expr": "pihole_status{hostname=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{ legend }}",
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "Status",
      "type": "stat"
    },
    {
      "cacheTimeout": null,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {},
          "mappings": [
            {
              "id": 0,
              "op": "=",
              "text": "N/A",
              "type": 1,
              "value": "null"
            }
          ],
          "nullValueMode": "connected",
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "rgb(255, 255, 255)",
                "value": null
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 2,
        "w": 4,
        "x": 4,
        "y": 1
      },
      "id": 80,
      "interval": null,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "value",
        "fieldOptions": {
          "calcs": [
            "mean"
          ]
        },
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        }
      },
      "pluginVersion": "7.0.3",
      "targets": [
        {
          "expr": "pihole_domains_being_blocked{hostname=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "Domains being blocked",
      "type": "stat"
    },
    {
      "cacheTimeout": null,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {},
          "mappings": [
            {
              "id": 0,
              "op": "=",
              "text": "N/A",
              "type": 1,
              "value": "null"
            }
          ],
          "nullValueMode": "connected",
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "rgb(255, 255, 255)",
                "value": null
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 2,
        "w": 4,
        "x": 8,
        "y": 1
      },
      "id": 82,
      "interval": null,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "value",
        "fieldOptions": {
          "calcs": [
            "mean"
          ]
        },
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        }
      },
      "pluginVersion": "7.0.3",
      "targets": [
        {
          "expr": "pihole_unique_domains{hostname=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "Unique domains",
      "type": "stat"
    },
    {
      "aliasColors": {},
      "breakPoint": "50%",
      "cacheTimeout": null,
      "combine": {
        "label": "Others",
        "threshold": 0
      },
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fontSize": "80%",
      "format": "short",
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 12,
        "y": 1
      },
      "id": 70,
      "interval": null,
      "legend": {
        "header": "",
        "show": false,
        "values": true
      },
      "legendType": "Under graph",
      "links": [],
      "maxDataPoints": 3,
      "nullPointMode": "connected",
      "pieType": "donut",
      "strokeWidth": 1,
      "targets": [
        {
          "expr": "pihole_top_queries{hostname=~\"$node\"}",
          "format": "time_series",
          "instant": true,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{ domain }}",
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "Top queries by domain",
      "transparent": false,
      "type": "grafana-piechart-panel",
      "valueName": "current"
    },
    {
      "aliasColors": {},
      "breakPoint": "50%",
      "cacheTimeout": null,
      "combine": {
        "label": "Others",
        "threshold": 0
      },
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fontSize": "80%",
      "format": "short",
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 16,
        "y": 1
      },
      "id": 86,
      "interval": null,
      "legend": {
        "percentage": true,
        "show": false,
        "values": false
      },
      "legendType": "On graph",
      "links": [],
      "maxDataPoints": 3,
      "nullPointMode": "connected",
      "pieType": "donut",
      "pluginVersion": "6.1.4",
      "strokeWidth": 1,
      "targets": [
        {
          "expr": "pihole_reply{hostname=~\"$node\"}",
          "format": "time_series",
          "instant": true,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{ type }}",
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "Replies by type",
      "transparent": false,
      "type": "grafana-piechart-panel",
      "valueName": "current"
    },
    {
      "aliasColors": {},
      "breakPoint": "50%",
      "cacheTimeout": null,
      "combine": {
        "label": "Others",
        "threshold": 0
      },
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fontSize": "80%",
      "format": "short",
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 20,
        "y": 1
      },
      "id": 72,
      "interval": null,
      "legend": {
        "show": false,
        "values": true
      },
      "legendType": "Right side",
      "links": [],
      "maxDataPoints": 3,
      "nullPointMode": "connected",
      "pieType": "pie",
      "strokeWidth": 1,
      "targets": [
        {
          "expr": "pihole_top_ads{hostname=~\"$node\"}",
          "format": "time_series",
          "instant": true,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{ domain }}",
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "Top ads by domain",
      "transparent": false,
      "type": "grafana-piechart-panel",
      "valueName": "current"
    },
    {
      "aliasColors": {
        "pihole": "super-light-blue"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 8,
        "x": 0,
        "y": 3
      },
      "hiddenSeries": false,
      "id": 66,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "pihole_dns_queries_all_types{hostname=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{ job }}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "DNS queries all of types",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "transparent": false,
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "cacheTimeout": null,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "custom": {},
          "decimals": 2,
          "mappings": [],
          "max": "100",
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "index": 0,
                "value": null
              },
              {
                "color": "#EAB839",
                "index": 1,
                "value": 40
              },
              {
                "color": "red",
                "index": 2,
                "value": 80
              }
            ]
          },
          "unit": "percent"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 5,
        "w": 4,
        "x": 8,
        "y": 3
      },
      "id": 92,
      "links": [],
      "options": {
        "colorMode": "value",
        "graphMode": "none",
        "justifyMode": "center",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "",
          "values": false
        }
      },
      "pluginVersion": "7.0.3",
      "targets": [
        {
          "expr": "pihole_ads_percentage_today{hostname=~'$node'}",
          "format": "time_series",
          "interval": "",
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "% ads blocked",
      "transparent": false,
      "type": "stat"
    },
    {
      "aliasColors": {
        "pihole": "light-red"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 8,
        "x": 0,
        "y": 8
      },
      "hiddenSeries": false,
      "id": 62,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "pihole_ads_blocked_today{hostname=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{ job }}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Ads blocked (today)",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "transparent": false,
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 8,
        "x": 8,
        "y": 8
      },
      "hiddenSeries": false,
      "id": 68,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": true,
      "steppedLine": false,
      "targets": [
        {
          "expr": "pihole_queries_cached{hostname=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "Queries cached",
          "refId": "A"
        },
        {
          "expr": "pihole_queries_forwarded",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "Queries forwarded",
          "refId": "B"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Queries cached/forwarded",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "transparent": false,
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {},
      "bars": false,
      "cacheTimeout": null,
      "dashLength": 10,
      "dashes": false,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 8,
        "x": 16,
        "y": 8
      },
      "hiddenSeries": false,
      "id": 78,
      "interval": null,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "maxDataPoints": 3,
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "pihole_querytypes{hostname=~'$node'}",
          "format": "time_series",
          "instant": true,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{ type }}",
          "refId": "A"
        },
        {
          "expr": "",
          "format": "time_series",
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "",
          "refId": "B"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "DNS Query types",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {
        "pihole": "super-light-red"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 8,
        "x": 0,
        "y": 13
      },
      "hiddenSeries": false,
      "id": 64,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "pihole_ads_percentage_today{hostname=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{ job }}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "% of ads blocked",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "transparent": false,
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "percent",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "columns": [],
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fontSize": "100%",
      "gridPos": {
        "h": 5,
        "w": 8,
        "x": 8,
        "y": 13
      },
      "id": 74,
      "links": [],
      "pageSize": null,
      "scroll": true,
      "showHeader": true,
      "sort": {
        "col": null,
        "desc": false
      },
      "styles": [
        {
          "alias": "",
          "align": "auto",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "link": false,
          "mappingType": 1,
          "pattern": "Time",
          "thresholds": [],
          "type": "date",
          "unit": "short"
        }
      ],
      "targets": [
        {
          "expr": "pihole_top_queries{hostname=~'$node'}",
          "format": "time_series",
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{ domain }}",
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "Top queries",
      "transform": "timeseries_to_rows",
      "transparent": false,
      "type": "table-old"
    },
    {
      "columns": [],
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fontSize": "100%",
      "gridPos": {
        "h": 5,
        "w": 8,
        "x": 16,
        "y": 13
      },
      "id": 90,
      "links": [],
      "pageSize": null,
      "scroll": true,
      "showHeader": true,
      "sort": {
        "col": 0,
        "desc": true
      },
      "styles": [
        {
          "alias": "Time",
          "align": "auto",
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "pattern": "Time",
          "type": "date"
        },
        {
          "alias": "",
          "align": "auto",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "decimals": 2,
          "pattern": "/.*/",
          "thresholds": [],
          "type": "number",
          "unit": "short"
        }
      ],
      "targets": [
        {
          "expr": "pihole_top_ads{hostname=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{ domain }}",
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "Top ads domains",
      "transform": "timeseries_to_rows",
      "transparent": false,
      "type": "table-old"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 12,
        "x": 0,
        "y": 18
      },
      "hiddenSeries": false,
      "id": 88,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "pihole_forward_destinations{hostname=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{ destination }}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Forward destinations",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "transparent": false,
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "percent",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {
        "pihole_unique_clients{hostname=\"127.0.0.1\",instance=\"localhost:9311\",job=\"pihole\"}": "rgb(255, 255, 255)",
        "pihole_unique_domains{hostname=\"127.0.0.1\",instance=\"localhost:9311\",job=\"pihole\"}": "super-light-yellow"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": null,
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fill": 10,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 12,
        "x": 12,
        "y": 18
      },
      "hiddenSeries": false,
      "id": 76,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 0,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "pihole_unique_clients{hostname=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Unique clients",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "transparent": false,
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "decimals": 0,
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    }
  ],
  "refresh": "30s",
  "schemaVersion": 25,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": [
      {
        "allValue": null,
        "current": {
          "selected": true,
          "text": "pihole.baraki.app",
          "value": "pihole.baraki.app"
        },
        "datasource": "Prometheus",
        "definition": "label_values(pihole_ads_blocked_today, hostname)",
        "hide": 0,
        "includeAll": false,
        "label": null,
        "multi": false,
        "name": "node",
        "options": [],
        "query": "label_values(pihole_ads_blocked_today, hostname)",
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "tagValuesQuery": "",
        "tags": [],
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      }
    ]
  },
  "time": {
    "from": "now-30m",
    "to": "now"
  },
  "timepicker": {
    "hidden": false,
    "nowDelay": "",
    "refresh_intervals": [
      "10s",
      "30s",
      "1m",
      "5m",
      "15m",
      "30m",
      "1h",
      "2h",
      "1d"
    ],
    "time_options": [
      "5m",
      "15m",
      "1h",
      "6h",
      "12h",
      "24h",
      "2d",
      "7d",
      "30d"
    ]
  },
  "timezone": "",
  "title": "PiHole DNS",
  "uid": "MIBVglomg",
  "version": 6
}