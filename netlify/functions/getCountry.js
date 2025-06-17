// Netlify Serverless Function to get signed URL for ElevenLabs API
exports.handler = async function (event) {
  const agent_id = "agent_01jxdnrec8f2x9nk0yxyqgpdzz";
  const ELE_KEY = process.env.ELEVENLABS_API_KEY;

  if (!API_URI || !ELE_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing environment variables" }),
    };
  }

  try {
    const apiUrl = `${process.env.API_URI}/v1/convai/conversation/get-signed-url?agent_id=${agent_id}`;
    const response = await fetch(apiUrl, {
      headers: {
        "xi-api-key": ELEVENLABS_API_KEY,
      },
    });
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API error" }),
    };
  }
};
