test("GET to api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();
  console.log(responseBody.updated_at);

  const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdateAt);

  expect(responseBody.postgres_version).toEqual("16.0");
  expect(responseBody.max_connections).toBe("100");

  console.log(responseBody.max_connections);
  console.log(responseBody.postgres_version);
});
