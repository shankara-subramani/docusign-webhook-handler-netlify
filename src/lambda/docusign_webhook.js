import xml2js from "xml2js";
import fetch from "node-fetch";

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  else {
    let envelopeStatus;
    let envelopeID;
    let data;
    let json;
    xml2js.parseString(event.body, function(err, result) {
      envelopeID =
        result.DocuSignEnvelopeInformation.EnvelopeStatus[0].EnvelopeID[0];
      envelopeStatus =
        result.DocuSignEnvelopeInformation.EnvelopeStatus[0].Status[0];
        json = JSON.stringify(result)
        data = {
          envelopeID: `${envelopeID}`,
          envelopeStatus: `${envelopeStatus}`,
          json: result
        }
        console.log(`envelopeID: ${envelopeID} / envelopeStatus: ${envelopeStatus}`);
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }

};
