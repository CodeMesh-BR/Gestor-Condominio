"use client";
import { GlobeIcon } from "@/assets/icons";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

import { useAvisoForm } from "./useAvisosForm";

const AvisosPage = () => {
	const {
		titulo,
		setTitulo,
		conteudo,
		setConteudo,
		nivelImportancia,
		setNivelImportancia,
		handleSubmit,
		isLoading,
	} = useAvisoForm();
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-1">
				<div className="flex flex-col gap-8">
					<form onSubmit={handleSubmit}>
						<ShowcaseSection
							title="Cadastrar novo aviso"
							className="space-y-4 !p-3"
						>
							<InputGroup
								label="Título"
								placeholder="Adicione o título"
								type="text"
								value={titulo}
								handleChange={(e) => setTitulo(e.target.value)}
							/>

							<TextAreaGroup
								label="Descrição"
								placeholder="Escreva aqui tudo sobre o aviso."
								value={conteudo}
								handleChange={(e) => setConteudo(e.target.value)}
							/>

							<Select
								label="Selecione o nível de importância"
								items={[
									{ label: "Normal", value: "NORMAL" },
									{ label: "Importante (!!)", value: "IMPORTANTE" },
									{ label: "Urgente (!!!)", value: "URGENTE" },
								]}
								value={nivelImportancia}
								handleChange={(e) => setNivelImportancia(e.target.value)}
								prefixIcon={<GlobeIcon />}
							/>

							<button className="mt-6 flex justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
								{isLoading ? "Cadastrando..." : "Cadastrar"}
							</button>
						</ShowcaseSection>
					</form>
				</div>
			</div>
		</>
	);
};

export default AvisosPage;
