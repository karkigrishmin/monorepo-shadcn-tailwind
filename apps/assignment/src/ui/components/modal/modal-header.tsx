import { DialogHeader, DialogTitle } from "@repo/assignment-ui/modal";
import { ModalTitleSkeleton } from "../skeletons/modal-title-skeleton";

interface IModalHeaderProps {
	isFetching: boolean;
	usersCount: number;
}

export const ModalHeader = ({ isFetching, usersCount }: IModalHeaderProps) => (
	<DialogHeader>
		{isFetching ? (
			<ModalTitleSkeleton />
		) : (
			<DialogTitle className='text-2xl font-normal'>
				{usersCount} birthdays today
			</DialogTitle>
		)}
	</DialogHeader>
);
