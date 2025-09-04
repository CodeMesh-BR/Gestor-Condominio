"use client";
import { avisosService } from "@/services/avisos.services";
import { useCallback, useState } from "react";

export const useAvisoForm = () => {
	const [titulo, setTitulo] = useState("");
	const [conteudo, setConteudo] = useState("");
	const [nivelImportancia, setNivelImportancia] = useState("NORMAL");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState<string | null>(null);

	const handleSubmit = useCallback(
		async (e: React.FormEvent) => {
			e.preventDefault();
			setIsLoading(true);
			setIsError(null);

			const avisoData = {
				titulo,
				conteudo,
				nivelImportancia,
			};

			try {
				const result = await avisosService.createAviso(avisoData);
				console.log("Aviso cadastrado com sucesso!", result);
				alert("Aviso cadastrado com sucesso!");

				setTitulo("");
				setConteudo("");
				setNivelImportancia("NORMAL");
			} catch (error) {
				setIsError(
					error instanceof Error
						? error.message
						: "Ocorreu um erro desconhecido",
				);
				console.error("Ocorreu um erro na requisição", error);
			} finally {
				setIsLoading(false);
			}
		},
		[conteudo, nivelImportancia, titulo],
	);

	return {
		titulo,
		setTitulo,
		conteudo,
		setConteudo,
		nivelImportancia,
		setNivelImportancia,
		handleSubmit,
		isLoading,
		isError,
	};
};
