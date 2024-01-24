import { membersPerTeam } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';

export const SkeletonTeamContainer = () => {
	return (
		<div className="space-y-2">
			{Array(membersPerTeam)
				.fill(0)
				.map((_, i) => (
					<div key={i}>
						<Skeleton className="w-full h-12 rounded" />
					</div>
				))}
		</div>
	);
};

export const SkeletonTeamDetails = () => {
	return (
		<div className="space-y-1">
			<Skeleton className="w-40 h-5" />
			<Skeleton className="w-40 h-5" />
			<Skeleton className="w-full h-5" />
			<Skeleton className="w-full h-5" />
		</div>
	);
};
