import { Modal } from "@repo/assignment-ui/modal";
import { useGetUsers } from "./api/users/get-users";
import { useEffect, useState } from "react";
import { UsersList } from "./ui/components/users-list/users-list";
import { ModalFooterButton } from "./ui/components/modal/modal-footer-button";
import { ModalHeader } from "./ui/components/modal/modal-header";

function App() {
	const [usersLimit, setUsersLimit] = useState(5);

	const userQuery = useGetUsers({
		params: { size: usersLimit },
	});

	useEffect(() => {
		userQuery.refetch();
	}, [usersLimit]);

	const users = userQuery?.data;

	const isFetching = userQuery?.isFetching;

	return (
		<>
			<Modal className='!shadow-modalBoxShadow max-h-[90%] gap-8'>
				<ModalHeader isFetching={isFetching} usersCount={users?.length ?? 0} />

				<UsersList isFetching={isFetching} users={users ?? []} />

				<ModalFooterButton
					isFetching={isFetching}
					usersLimit={usersLimit}
					setUsersLimit={setUsersLimit}
				/>
			</Modal>
		</>
	);
}

export default App;
