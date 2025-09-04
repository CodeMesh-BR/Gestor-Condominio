import { api } from "./api";

interface createAvisosPayload {
	titulo: string;
	conteudo: string;
	nivelImportancia: string;
}

const createAviso = async (data: createAvisosPayload) => {
	const response = await api.post("/avisos", data);
	return response.data;
};

const getAvisos = async () => {
	const response = await api.get("/avisos");
	return response.data;
};

const deleteAvisos = async (id: string) => {
	const response = await api.delete(`/avisos/${id}`);
	return response.data;
};

export const avisosService = { createAviso, getAvisos, deleteAvisos };
