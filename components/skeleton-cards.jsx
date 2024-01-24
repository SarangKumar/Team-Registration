import { membersPerTeam } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';

export const SkeletonTeamContainer = () => {
	return (
		<>
			<SkeletonTeamDetails />
			<div className="space-y-4">
				<Skeleton className="w-2/3 h-16 " />
				<div className="space-y-2">
					{Array(membersPerTeam)
						.fill(0)
						.map((_, i) => (
							<div
								key={i}
								className="space-y-10 my-10"
							>
								<Skeleton className="w-60 h-8 rounded" />
								<div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
									<Skeleton className="w-full h-12 rounded" />
									<Skeleton className="w-full h-12 rounded" />
									<Skeleton className="w-full h-12 rounded" />
									<Skeleton className="w-full h-12 rounded" />
									<Skeleton className="w-full h-12 rounded" />
									<Skeleton className="w-full h-12 rounded" />
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export const SkeletonTeamDetails = () => {
	return (
		<>
			<Skeleton className="w-2/3 h-16 " />
			<div className="space-y-2 my-4">
				<Skeleton className="w-40 h-8" />
				{Array(6)
					.fill(0)
					.map((_, i) => (
						<Skeleton
							key={i}
							className="w-full h-5"
						/>
					))}
				<div className="grid gap-2 grid-cols-1 md:grid-cols-2">
					<Skeleton className="w-full h-10" />
					<Skeleton className="w-full h-10" />
				</div>
				<Skeleton className="w-full h-28" />
			</div>
		</>
	);
};
