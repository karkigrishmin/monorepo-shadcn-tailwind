import { useQuery } from "@tanstack/react-query";

interface IUserApiParams {
	size: number;
}

interface IUser {
	avatar: string;
	date_of_birth: string;
	first_name: string;
	last_name: string;
	id: number;
}

const fetchUsers = async ({
	params,
}: {
	params: IUserApiParams;
}): Promise<IUser[]> => {
	console.log("query key", params);
	const { size = 5 } = params;
	const response = await fetch(
		`https://random-data-api.com/api/v2/users?size=${size}`
	);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
};

export const useGetUsers = ({ params }: { params: IUserApiParams }) =>
	useQuery({
		queryKey: ["users", params],
		queryFn: () => fetchUsers({ params }),
	});
