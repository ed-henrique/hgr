/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "42x2kjhrftt0cme",
    "created": "2024-10-16 21:25:22.060Z",
    "updated": "2024-10-16 21:25:22.060Z",
    "name": "hospital_beds_history",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fipykygr",
        "name": "number",
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
        "id": "ezwhpm9b",
        "name": "status",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Ocupado",
            "Em Limpeza",
            "Liberado"
          ]
        }
      },
      {
        "system": false,
        "id": "83psg5gv",
        "name": "sector",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "tz51hq959gwb58p",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "5tyhbcmd",
        "name": "using_o2",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "CN",
            "TQT"
          ]
        }
      },
      {
        "system": false,
        "id": "x14yfaxa",
        "name": "using_vaccuum",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Dreno",
            "Oral"
          ]
        }
      },
      {
        "system": false,
        "id": "fp4fjxfd",
        "name": "hospital_bed_id",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "2g8hcv6vjh9y3ep",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "ooghy7rq",
        "name": "operation",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Inserção",
            "Atualização",
            "Remoção"
          ]
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
  const collection = dao.findCollectionByNameOrId("42x2kjhrftt0cme");

  return dao.deleteCollection(collection);
})
