/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2g8hcv6vjh9y3ep",
    "created": "2024-10-16 20:57:56.148Z",
    "updated": "2024-10-16 20:57:56.148Z",
    "name": "hospital_beds",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ee7fw1fa",
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
        "id": "6cdfm4fk",
        "name": "status",
        "type": "select",
        "required": false,
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
        "id": "9akqw003",
        "name": "using_o2",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "iudht6l7",
        "name": "using_vaccuum",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ppnws2s3",
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
  const collection = dao.findCollectionByNameOrId("2g8hcv6vjh9y3ep");

  return dao.deleteCollection(collection);
})
