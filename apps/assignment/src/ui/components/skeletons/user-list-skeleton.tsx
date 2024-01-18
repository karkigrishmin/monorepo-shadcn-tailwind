import { UserListItemSkeleton } from "./user-list-item-skeleton";

interface IUserListSkeletonProps {
	userCount?: number;
}

export const UserListSkeleton = ({ userCount = 5 }: IUserListSkeletonProps) =>
	Array.from({ length: userCount }).map((_, index) => <UserListItemSkeleton />);
