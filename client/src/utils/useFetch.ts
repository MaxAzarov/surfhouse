export default async function useFetch(
  url: string = "/",
  method: string = "GET",
  body: any,
  token: string
) {
  try {
    if (body) {
      console.log(body);
      body = JSON.stringify(body);
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await fetch(url, { method, body, headers });
    const data = await response.json();
    // setLoading(false);
    console.log(data);
    return data;
  } catch (e) {
    // setLoading(false);
    // setError(e.message);
    throw e;
  }
}
