const GEMINI_API_KEY =
"PUT_YOUR_GEMINI_API_KEY_HERE";

async function askGemini(prompt){

  try {

    const response =
      await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI\_API\_KEY}\`,
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({

            contents:[
              {
                parts:[
                  {
                    text:
`You are Beacon, a Business Discovery Intelligence assistant created by Reedstar Royal Ltd.

Question:
${prompt}`
                  }
                ]
              }
            ]

          })

        }
      );

    const data =
      await response.json();

    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text
      ||
      "No response received."
    );

  } catch(error){

    console.error(error);

    return "Beacon encountered an error.";

  }

}
