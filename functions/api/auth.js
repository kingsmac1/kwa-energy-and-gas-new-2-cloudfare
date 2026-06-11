export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("Missing code", { status: 400 });
  }

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();
  const token = data.access_token;

  const script = `
    <script>
      (function() {
        function receiveMessage(e) {
          console.log("receiveMessage %o", e);
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({ token, provider: "github" })}',
            e.origin
          );
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })()
    </script>
  `;

  return new Response(script, {
    headers: { "Content-Type": "text/html" },
  });
}