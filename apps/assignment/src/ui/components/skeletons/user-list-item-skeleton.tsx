export const UserListItemSkeleton = () => (
	<li className='flex items-start gap-2 animate-pulse'>
		<div className='bg-gray-300 w-12 h-12 rounded-full'></div>
		<div className='flex flex-col'>
			<h5 className='bg-gray-300 w-24 h-4 mb-2'></h5>
			<p className='bg-gray-300 w-10 h-4'></p>
		</div>
	</li>
);
