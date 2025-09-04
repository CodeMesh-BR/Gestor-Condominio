"use client";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import AvisosCard from "./components/card";
import { useListAvisos } from "./useListAvisos";

const ListAvisosPage = () => {
	const { avisos, isLoading, isError, handleDeleteAviso, handleEditAviso } =
		useListAvisos();

	if (isLoading) return <p>Carregando avisos...</p>;

	if (isError) return <p>Erro ao carregar avisos...</p>;

	if (!avisos.length) {
		return (
			<ShowcaseSection title="Lista de avisos">
				<div>
					<h3>Nenhum aviso cadastrado...</h3>
					<button className="mt-6 flex justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
						Cadastrar
					</button>
				</div>
			</ShowcaseSection>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-1">
			<div className="flex flex-col">
				<ShowcaseSection title="Lista de avisos">
					<div className="flex flex-col gap-5">
						{avisos.map((aviso) => (
							<AvisosCard
								title={aviso.titulo}
								description={aviso.conteudo}
								importanceLevel={aviso.nivelImportancia}
								key={aviso.id}
								handleDeleteAviso={() => handleDeleteAviso(aviso.id)}
								handleEditAviso={handleEditAviso}
							/>
						))}
					</div>
				</ShowcaseSection>
			</div>
		</div>
	);
};

export default ListAvisosPage;
