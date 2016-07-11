# api
This is a node.js api that I am building as part of my reseach. It uses express framework.

First Header | Second Header | Third Header
------------ | ------------- | ------------
Get LFST document from database | GET | /GETById/{id}
Get inputKnowledgeItems from database | GET | inputKnowledgeItemsGET/{id}
Get OutputKnowledgeItems from database | GET | /OutputKnowledgeItemsGET/{id}
Get learning state from database | GET | /learningStateGET/{id}
Get state Transition from database | GET | /stateTransitionGET/{id}
Get output Reccomendations from database | GET | /outputReccomendationsGET/{id}



First Header | Second Header | Third Header
------------ | ------------- | ------------
Creates a new LFST file in the database, returns id of document | POST | /newLFST/
Posts a new Input Knowledge Item into LFST | POST | /inputKnowledgeItemsPOST/{id}
Posts a new Output Knowledge Item into LFST | POST | /outputKnowledgeItemsPOST/{id}
Posts a new Learning State into LFST | POST | /learningStatePOST/{id}
Posts a new State Transition into LFST | POST | /stateTransitionPOST/{id}
Posts a new output reccomendation into LFST | POST | /outputReccomendationsPOST/{id}
