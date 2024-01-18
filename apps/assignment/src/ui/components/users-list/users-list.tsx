import { IUser } from "../../../types/user/user.types";
import { UserListSkeleton } from "../skeletons/user-list-skeleton";
import { UserListItem } from "./user-list-item";

interface IUserListProps {
	users: IUser[];
	isFetching: boolean;
}

export const UsersList = ({ users, isFetching }: IUserListProps) => (
	<ul className='flex flex-col gap-5'>
		{isFetching ? (
			<UserListSkeleton />
		) : (
			users?.map((eachUser) => {
				const birthdate = new Date(eachUser.date_of_birth);
				const currentDate = new Date();

				const age = currentDate.getFullYear() - birthdate.getFullYear();

				return <UserListItem age={age} eachUser={eachUser} key={eachUser.id} />;
			})
		)}
	</ul>
);
