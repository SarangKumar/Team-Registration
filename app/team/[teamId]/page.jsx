import { AlertTriangle } from 'lucide-react';
import { Suspense } from 'react';

import RegisterParticipants from '@/components/register-user';
import { SkeletonTeamContainer } from '@/components/skeleton-cards';
import TeamNotRegistered from '@/components/team-not-registered';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import prisma from '@/prisma/prisma';

export const metadata = {
	title: 'Participants Registration'
}

const ParticipantsPage = async ({ params }) => {
	const teamId = params.teamId;
	return (
		<div className="mx-4 sm:mx-10 lg:mx-20 mt-12 mb-8">
			<Suspense fallback={<SkeletonTeamContainer />}>
				<TeamDetails teamId={teamId} />
			</Suspense>
		</div>
	);
};

export default ParticipantsPage;

const TeamDetails = async ({ teamId }) => {
	let team;
	try {
		prisma.$connect();
		team = await prisma.team.findUnique({
			where: {
				id: teamId,
			},
			include: {
				members: true,
			},
		});
		console.log(team);
	} catch (error) {
		console.log(error.message);
	} finally {
		prisma.$disconnect();
	}

	if (!team) {
		return <TeamNotRegistered />;
	}

	return (
		<>
			<h1 className="font-bold text-3xl tracking-tight">
				Your team has been registered 😇
			</h1>
			<div className="my-5 space-y-3 border-b">
				<h3 className="text-lg font-bold">{team.team_name}</h3>
				<p className="text-muted-foreground text-sm">
					{team.description}
				</p>
				<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 my-4">
					<Button
						asChild
						size="sm"
					>
						<a href={team.solution}>View your solution</a>
					</Button>
					<div className="border bg-secondary flex items-center justify-center rounded-md">
						<p className="font-mono select-none">{team.id}</p>
					</div>
				</div>
				<Alert variant="destructive">
					<AlertTriangle className="h-4 w-4" />
					<AlertTitle>Attention!</AlertTitle>

					<AlertDescription>
						Do not share your team id with anyone.
					</AlertDescription>
				</Alert>
			</div>
			<Separator className="my-4" />
			<RegisterParticipants team={team} />
		</>
	);
};
