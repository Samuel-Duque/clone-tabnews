function status(request, response) {
  response.status(200).json({ chave: "Sou acima da média" });
}

export default status;
