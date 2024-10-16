/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5wk0or3jwye4jim",
    "created": "2024-10-16 21:14:36.374Z",
    "updated": "2024-10-16 21:14:36.374Z",
    "name": "patients",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m6sd0pvd",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 256,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yhq0aasp",
        "name": "status",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Internado",
            "Aguardando Transporte"
          ]
        }
      },
      {
        "system": false,
        "id": "vf5lu6i6",
        "name": "gender",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "M",
            "F"
          ]
        }
      },
      {
        "system": false,
        "id": "zqnatoxc",
        "name": "birthdate",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "xggzoshz",
        "name": "age",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "n2clwjni",
        "name": "nationality",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Brasileiro",
            "Guianense",
            "Venezuelano"
          ]
        }
      },
      {
        "system": false,
        "id": "oqr1mfcr",
        "name": "diagnosis",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 1024,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fgdkwec9",
        "name": "precautions",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Padrão",
            "Contato"
          ]
        }
      },
      {
        "system": false,
        "id": "vr3ehmhy",
        "name": "justifications",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 1024,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sbzvsxfg",
        "name": "pending_issues",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 1024,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mvif3kka",
        "name": "is_pregnant",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ph3qtzev",
        "name": "is_dva",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "k3et8dgs",
        "name": "is_lpp",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "forfuuzm",
        "name": "is_svd",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "fm7hgxyv",
        "name": "is_sne",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "xhxlhw17",
        "name": "is_drc_dca",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "3hfz4oyy",
        "name": "origin_place",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Bloco C1",
            "CC2 - Centro Cirúrgico 2",
            "PSFE V2 - Vermelha 2"
          ]
        }
      },
      {
        "system": false,
        "id": "b8qhuz4v",
        "name": "issues_during_transfer",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 1024,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kkdxsvqt",
        "name": "expected_discharge_date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "ayojfuqe",
        "name": "admission_date_in_hgr",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "yydhbf2s",
        "name": "admission_date_in_sector",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "76ykph0m",
        "name": "record_time",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "nxkkwkfb",
        "name": "responsible_nurse",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5wk0or3jwye4jim");

  return dao.deleteCollection(collection);
})
