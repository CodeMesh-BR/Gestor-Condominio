"use client";

import { useState, useEffect, useCallback } from "react";
import { avisosService } from "@/services/avisos.services";

interface Aviso {
	id: string;
	titulo: string;
	conteudo: string;
	nivelImportancia: "NORMAL" | "IMPORTANTE" | "URGENTE";
	createdAt: string;
}

export const useListAvisos = () => {
	const [avisos, setAvisos] = useState<Aviso[]>([]);

	const [isLoading, setIsLoading] = useState(true);

	const [isError, setIsError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAvisos = async () => {
			try {
				setIsLoading(true);
				const result = await avisosService.getAvisos();
				setAvisos(result);
			} catch (err) {
				setIsError("Falha ao buscar os avisos.");
				console.error(err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchAvisos();
	}, []);

	const handleDeleteAviso = useCallback(async (id: string) => {
		try {
			if (window.confirm("Tem certeza que deseja excluir este aviso?")) {
				await avisosService.deleteAvisos(id);

				setAvisos((prevAvisos) =>
					prevAvisos.filter((aviso) => aviso.id !== id),
				);

				alert("Aviso excluído com sucesso!");
			}
		} catch (error) {
			console.error("Falha ao excluir o aviso", error);
			alert("Falha ao excluir o aviso.");
		}
	}, []);

	const handleEditAviso = useCallback(() => {
		console.log("Editou");
	}, []);

	return { avisos, isLoading, isError, handleDeleteAviso, handleEditAviso };
};
