import { DialogFooter } from "@repo/assignment-ui/modal";
import { ModalFooterButtonSkeleton } from "../skeletons/modal-footer-button-skeleton";
import { Button } from "../../../../../../packages/assignment-ui/src/lib/button/button";

interface IModalFooterButtonProps {
	isFetching: boolean;
	usersLimit: number;
	setUsersLimit: React.Dispatch<React.SetStateAction<number>>;
}

export const ModalFooterButton = ({
	isFetching,
	usersLimit,
	setUsersLimit,
}: IModalFooterButtonProps) => (
	<DialogFooter className='w-full'>
		{isFetching ? (
			<ModalFooterButtonSkeleton />
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
);
