define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/cases",
    "title": "Request a list of all cases information",
    "name": "StolenBikes",
    "group": "Case",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Case",
            "description": "<p>List of all cases</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong in the server...</p>"
          }
        ]
      }
    },
    "filename": "app/Controllers/Http/CaseController.js",
    "groupTitle": "Case"
  },
  {
    "type": "get",
    "url": "/api/v1/cases/active",
    "title": "Request a list of all active cases",
    "name": "StolenBikes",
    "group": "Case",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Case",
            "description": "<p>List of all active cases</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong in the server...</p>"
          }
        ]
      }
    },
    "filename": "app/Controllers/Http/CaseController.js",
    "groupTitle": "Case"
  },
  {
    "type": "get",
    "url": "/api/v1/cases/closed",
    "title": "Request a list of all closed cases",
    "name": "StolenBikes",
    "group": "Case",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Case",
            "description": "<p>List of all closed cases</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong in the server...</p>"
          }
        ]
      }
    },
    "filename": "app/Controllers/Http/CaseController.js",
    "groupTitle": "Case"
  },
  {
    "type": "get",
    "url": "/api/v1/cases/closed",
    "title": "Request a list of all open cases",
    "name": "StolenBikes",
    "group": "Case",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Case",
            "description": "<p>List of all open cases</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong in the server...</p>"
          }
        ]
      }
    },
    "filename": "app/Controllers/Http/CaseController.js",
    "groupTitle": "Case"
  },
  {
    "type": "post",
    "url": "/api/v1/cases",
    "title": "Create a new case",
    "name": "StolenBikes",
    "group": "Case",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "details",
            "description": "<p>Details of case</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"open\"",
              "\"in_progress\"",
              "\"resolved\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Case status</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "officer_id",
            "description": "<p>Officer ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bike_id",
            "description": "<p>Bike ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "departament_id",
            "description": "<p>Departament ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "theft_date",
            "defaultValue": "now",
            "description": "<p>theft_date Theft date</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SuccessMessage",
            "description": "<p>Success!</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong in the server...</p>"
          }
        ]
      }
    },
    "filename": "app/Controllers/Http/CaseController.js",
    "groupTitle": "Case"
  },
  {
    "type": "get",
    "url": "/api/v1/cases/:id",
    "title": "Get case by id",
    "name": "StolenBikes",
    "group": "Case",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Case",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong in the server...</p>"
          }
        ]
      }
    },
    "filename": "app/Controllers/Http/CaseController.js",
    "groupTitle": "Case"
  },
  {
    "type": "put",
    "url": "/api/v1/cases/:id",
    "title": "Edit a case",
    "name": "StolenBikes",
    "group": "Case",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "details",
            "description": "<p>Details of case</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"open\"",
              "\"in_progress\"",
              "\"resolved\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Case status</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "officer_id",
            "description": "<p>Officer ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bike_id",
            "description": "<p>Bike ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "departament_id",
            "description": "<p>Departament ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "theft_date",
            "description": "<p>Theft date</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SuccessMessage",
            "description": "<p>Success!</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong in the server...</p>"
          }
        ]
      }
    },
    "filename": "app/Controllers/Http/CaseController.js",
    "groupTitle": "Case"
  },
  {
    "type": "delete",
    "url": "/api/v1/cases/:id",
    "title": "Delete case by id",
    "name": "StolenBikes",
    "group": "Case",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SuccessMessage",
            "description": "<p>Success!</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something went wrong in the server...</p>"
          }
        ]
      }
    },
    "filename": "app/Controllers/Http/CaseController.js",
    "groupTitle": "Case"
  }
] });
