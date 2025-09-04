interface AvisosCardsProps {
	title: string;
	description: string;
	importanceLevel: string;
	handleEditAviso: () => void;
	handleDeleteAviso: () => void;
}

const AvisosCard = ({
	title,
	description,
	importanceLevel,
	handleEditAviso,
	handleDeleteAviso,
}: AvisosCardsProps) => {
	return (
		<div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
			<div className="mb-4 flex items-center justify-between">
				<h2 className="text-lg font-semibold text-gray-900 dark:text-white">
					{title}
				</h2>
				<span
					className={`rounded-full px-2.5 py-1 text-xs font-medium
              ${importanceLevel === "URGENTE" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : ""}
              ${importanceLevel === "IMPORTANTE" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : ""}
              ${importanceLevel === "NORMAL" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : ""}
            `}
				>
					{importanceLevel}
				</span>
			</div>

			<p className="mb-6 text-gray-600 dark:text-gray-400 line-clamp-3">
				{description}
			</p>

			<div className="mt-auto flex items-center justify-end gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
				<button
					className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/50"
					onClick={handleDeleteAviso}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
					Excluir
				</button>

				<button
					className="flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
					onClick={handleEditAviso}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z"
						/>
					</svg>
					Editar
				</button>
			</div>
		</div>
	);
};

export default AvisosCard;
