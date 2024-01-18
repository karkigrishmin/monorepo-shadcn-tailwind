import {
	DialogFooter,
	DialogHeader,
	DialogTitle,
	Modal,
} from "@repo/assignment-ui/modal";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "../../../packages/assignment-ui/src/lib/avatar/avatar";
import { Button } from "../../../packages/assignment-ui/src/lib/button/button";

import { useGetUsers } from "./api/users/get-users";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	const [usersLimit, setUsersLimit] = useState(5);

	const userQuery = useGetUsers({
		params: { size: usersLimit },
	});

	useEffect(() => {
		userQuery.refetch();
	}, [usersLimit]);

	const users = userQuery?.data;

	console.log("user query", userQuery);
	console.log("users", users);

	return (
		<>
			<Modal className='!shadow-modalBoxShadow max-h-[90%] overflow-y-auto gap-8'>
				<DialogHeader>
					{userQuery?.isFetching ? (
						<p className='bg-gray-300 w-[50%] h-10'></p>
					) : (
						<DialogTitle className='text-2xl font-normal'>
							{users?.length} birthdays today
						</DialogTitle>
					)}
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

				<DialogFooter className='w-full'>
					{userQuery.isFetching ? (
						<div className='bg-gray-300 w-full py-6 px-6 rounded-lg shadow-md animate-pulse'></div>
					) : (
						<Button
							onClick={() => {
								if (usersLimit === 100) {
									setUsersLimit(5);

									return;
								}
								setUsersLimit(100);
							}}
							autoFocus={false}
							className='w-full bg-gradient-to-r from-[#FF6FD8] to-[#FD267A] text-white font-medium text-lg py-6 px-6 rounded-lg shadow-md !focus:outline-none !outline-none !border-0 focus-visible:outline-none focus-visible:ring-0'
						>
							View {usersLimit === 100 ? "less" : "all"}
						</Button>
					)}
				</DialogFooter>
			</Modal>
		</>
	);
}

export default App;
