{
  "id": "0000-MUST-BE-A-GUID",
  "timestamp": "2018-05-10T11:32:42Z",
  "actor": {
    "objectType": "Agent",
    "account": {
      "homePage": "https://docs.dataporten.no",
      "name": "76a7a061-3c55-430d-8ee0-6f82ec42501f"
    }
  },
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/answered",
    "display": {
      "en-US": "answered",
      "nb-NO": "besvarte"
    }
  },
  "object": {
    "objectType": "Activity",
    "id": "http://www.lokus.no/open/nummer/Nummer-8/4-Tall-og-algebra/Kapitteltest#Oppgave-1",
    "definition": {
      "moreInfo": "http://data.lokus.no/page/resource/contentItem13801Ez",
      "name": {
        "nb-NO": "Oppgave 1 / Kapitteltest / 4 Tall og algebra / Nummer 8 / nummer / open - Lokus"
      },
      "description": {
        "nb-NO": "Hvilke av regnestykkene har svaret 23?"
      },
      "type": "http://adlnet.gov/expapi/activities/cmi.interaction",
      "interactionType": "choice",
      "choices": [
        {
	  "id": "A", "description": { "nb-NO": "23 - 46" }
	},
	{
	  "id": "B", "description": { "nb-NO": "6 * 4 - 1" }
	},
	{
	  "id": "C", "description": { "nb-NO": "(-46):(-2)" }
	}
      ],
      "correctResponsesPattern": [ "B[,]C" ]
    }
  },
  "result": {
    "duration": "PT2M45S",
    "response": "B[,]C",
    "success": true,
    "score": {
      "min": 0.0, "max": 2.0, "raw": 2.0, "scaled": 1.0
    }
  },
  "context": {
    "registration": "0000-MUST-BE-A-REAL-GUID-HERE-0000",
    "platform": "Lokus Flash",
    "language": "nb-NO",
    "extensions": {
	"http://schema.org/affiliation": [
	  {
	    "http://schema.org/identifier": "https://api.feide.no/2/org/86",
	    "http://schema.org/legalName": "Oslo kommune"
	  }, {
	    "http://schema.org/identifier": "http://data.brreg.no/enhetsregisteret/underenhet/974589648",
	    "http://schema.org/legalName": "Abildsø skole"
	  }
	]
    },
    "contextActivities": {
      "grouping": [
        {
	  "objectType": "Activity",
	  "id": "http://psi.udir.no/kl06/K15201",
	  "definition": {
	    "moreInfo": "http://data.udir.no/kl06/K15201.html",
	    "name": {
	      "nb-NO": "K15201"
	    },
	    "description": {
	      "nb-NO": "behandle, faktorisere og forenkle algebrauttrykk, knytte uttrykkene til praktiske situasjoner, regne med formler, parenteser og brøkuttrykk og bruke kvadratsetningene"
	    },
	    
	    /* Nedenfor vises noen varianter av activity type for diskusjon... */
	    /* Noen av URI'ene har alt for lange navn (for å prøve å forklare hva jeg tenker) */
	    
	    /* Alternativ 1.A: Bare bruke objective fra ADL */
	    "type": "http://adlnet.gov/expapi/activities/objective",
	    
	    /* Alternativ 1.B: Bruke den nye som Torleif tenkte på (det er bedre enn A) */
	    "type": "https://w3id.org/xapi/avt/activity-types/competence-aim",

            /* Alternativ 1.C: Bruke en activity type som spesifikt sier at målet fra LM-base er "assessed/assesses" og ikke "taught/teaches" */
	    "type": "https://w3id.org/xapi/avt/activity-types/competence-aim-assessed",
	    "type": "https://w3id.org/xapi/avt/activity-types/competence-aim-taught",

            /* Alternativ 1.D: Bruke en custom activity type som representerer en educationalAlignment */
	    /* men som også trenger en extension for å si på hvilken måte URI'en er tilknyttet object i statementet*/
	    "type": "https://w3id.org/xapi/avt/activity-types/educationalAlignment-with-alignmentType",
	    "extensions": {
	      "https://w3id.org/xapi/avt/extensions/educationalAlignment-alignmentType": "assesses"
	    }
	  }
	},
	{
	  "objectType": "Activity",
	  "id": "https://ceds.ed.gov/element/001088/#LowComplexity",
	  "definition": {
	    "moreInfo": "https://ceds.ed.gov/cedselementdetails.aspx?termid=4072",
	    "name": {
	      "nb-NO": "Lav kompleksitet"
	    },
	    "description": {
	      "nb-NO": ""
	    },

            /* Nedenfor vises noen varianter av activity type for diskusjon... */
	    /* Noen av URI'ene har alt for lange navn (for å prøve å forklare hva jeg tenker) */
	    
	    /* Alternativ 2.A: Bare bruke den nye som Torleif tenkte på */
	    "type": "https://w3id.org/xapi/avt/activity-types/complexity-level",
	    
	    /* Alternativ 2.B: Bruke en custom activity type som representerer en educationalAlignment */
	    /* men som også trenger en extension for å si på hvilken måte URI'en er tilknyttet object i statementet*/
	    "type": "https://w3id.org/xapi/avt/activity-types/educationalAlignment-with-alignmentType",
	    "extensions": {
	      "https://w3id.org/xapi/avt/extensions/educationalAlignment-alignmentType": "complexityLevel"
	    }
	  }
	}
      ]
    }
  }
}
