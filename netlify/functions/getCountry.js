// update
exports.handler = async function (event) {
  const agent_id = "agent_01jxdnrec8f2x9nk0yxyqgpdzz";
  const ELE_KEY = "sk_ca703d8cad15206b7a5eb88b17a4c0ab57f714050d8eac07";

  console.log(ELE_KEY);

  try {
    const apiUrl = `${process.env.API_URI}/v1/convai/conversation/get-signed-url?agent_id=${agent_id}`;
    const response = await fetch(apiUrl, {
      headers: {
        "xi-api-key": ELE_KEY,
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
