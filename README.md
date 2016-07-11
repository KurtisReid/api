# api
This is a node.js api that I am building as part of my reseach. It uses express framework.

**URL Parameters**

Parameter | Type | Specification
--------- | ---- | -------------
{id} | String | id of LFST document in database
{oid} | String | id of object in LFST document

**URL Parameters**

Function | Method | URL
------------ | ------------- | ------------
Get LFST document from database | GET | /GETById/{id}
Get inputKnowledgeItems from database | GET | inputKnowledgeItemsGET/{id}
Get OutputKnowledgeItems from database | GET | /OutputKnowledgeItemsGET/{id}
Get learning state from database | GET | /learningStateGET/{id}
Get state Transition from database | GET | /stateTransitionGET/{id}
Get output Reccomendations from database | GET | /outputReccomendationsGET/{id}
------------ | ------------- | ------------
Creates a new LFST file in the database, returns id of document | POST | /newLFST/
Posts a new Input Knowledge Item into LFST | POST | /inputKnowledgeItemsPOST/{id}
Posts a new Output Knowledge Item into LFST | POST | /outputKnowledgeItemsPOST/{id}
Posts a new Learning State into LFST | POST | /learningStatePOST/{id}
Posts a new State Transition into LFST | POST | /stateTransitionPOST/{id}
Posts a new output recommendation into LFST | POST | /outputReccomendationsPOST/{id}
------------ | ------------- | ------------
Deletes specific output Knowledge Source object | DELETE | /outputKSDELETE/{id}/{oid}
Deletes specific input Knowledge Source object | DELETE | /inputKSDELETE/{id}/{oid}
Deletes specific output recommendation object | DELETE | /outputReccomendationsDELETE/{id}/{oid}
