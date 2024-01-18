import { DialogHeader, DialogTitle, Modal } from "@repo/assignment-ui/modal";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "../../../packages/assignment-ui/src/lib/avatar/avatar";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useGetUsers } from "./api/users/get-users";

function App() {
	const [usersLimit, setUsersLimit] = useState(5);

	// const fetchUsers = async ({ queryKey }) => {
	// 	console.log("query key", queryKey);
	// 	const [_, limit] = queryKey;
	// 	const response = await fetch(
	// 		`https://random-data-api.com/api/v2/users?size=${limit}`
	// 	);
	// 	if (!response.ok) {
	// 		throw new Error("Network response was not ok");
	// 	}
	// 	return response.json();
	// };

	// const userQuery = useQuery({
	// 	queryKey: ["users", usersLimit],
	// 	queryFn: fetchUsers,
	// });

	// const users: {
	// 	avatar: string;
	// 	date_of_birth: string;
	// 	first_name: string;
	// 	last_name: string;
	// 	id: number;
	// }[] = userQuery?.data ?? [];

	const userQuery = useGetUsers({
		params: { size: usersLimit },
	});

	const users = userQuery?.data;
	console.log("user query", userQuery);
	console.log("users", users);

	return (
		<>
			<Modal className='!shadow-modalBoxShadow'>
				<DialogHeader>
					<DialogTitle>{users?.length} birthdays today</DialogTitle>
				</DialogHeader>

				<ul className='flex flex-col gap-5'>
					{userQuery?.isFetching ? (
						<>
							{Array.from({ length: 5 }).map((_, index) => (
								<li
									key={index}
									className='flex items-start gap-2 animate-pulse'
								>
									<div className='bg-gray-300 w-12 h-12 rounded-full'></div>
									<div className='flex flex-col'>
										<h5 className='bg-gray-300 w-24 h-4 mb-2'></h5>
										<p className='bg-gray-300 w-10 h-4'></p>
									</div>
								</li>
							))}
						</>
					) : (
						users?.map((eachUser) => {
							const birthdate = new Date(eachUser.date_of_birth);

							const currentDate = new Date();

							const age = currentDate.getFullYear() - birthdate.getFullYear();

							return (
								<li key={eachUser.id} className='flex items-start gap-2'>
									{/* <img src={eachUser.avatar} alt={eachUser.first_name} /> */}

									<Avatar className='border-[1px] w-[3rem] h-[3rem]'>
										<AvatarImage src={eachUser.avatar} />
										<AvatarFallback>{eachUser.first_name}</AvatarFallback>
									</Avatar>

									<div className='flex flex-col'>
										<h5>
											{eachUser.first_name} {eachUser.last_name}
										</h5>
										<p className='text-gray-500'>{age} years</p>
									</div>
								</li>
							);
						})
					)}
				</ul>
			</Modal>
		</>
	);
}

export default App;
