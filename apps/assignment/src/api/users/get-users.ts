import { useQuery } from "@tanstack/react-query";
import { IUser, IUserApiParams } from "../../types/user/user.types";

const fetchUsers = async ({
	params,
}: {
	params: IUserApiParams;
}): Promise<IUser[]> => {
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
