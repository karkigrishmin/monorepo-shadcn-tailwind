import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "../../../../../../packages/assignment-ui/src/lib/avatar/avatar";
import { IUser } from "../../../types/user/user.types";

interface IUserListItemProps {
	eachUser: IUser;
	age: number;
}

export const UserListItem = ({ eachUser, age }: IUserListItemProps) => (
	<li key={eachUser.id} className='flex items-start gap-2'>
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
