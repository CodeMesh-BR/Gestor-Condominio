import { useCallback, useState } from "react";

const INITIAL_STATE = {
	titulo: "",
	conteudo: "",
	nivelImportancia: "0",
};

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
				const response = await fetch("http://localhost:3001/avisos", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(avisoData),
				});
				if (!response.ok) {
					throw new Error("Falha ao cadastrar aviso");
				}

				const result = await response.json();
				console.log(result);
				alert("Aviso cadastrado com sucesso!");

				setTitulo(INITIAL_STATE.titulo);
				setConteudo(INITIAL_STATE.conteudo);
				setNivelImportancia(INITIAL_STATE.nivelImportancia);
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
