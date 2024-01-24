import Hero from '@/components/hero';
import RegisterParticipants from '@/components/register-user';
import RegisteredTeams from '@/components/registred-team';
import { SkeletonTeamContainer } from '@/components/skeleton-cards';
import TeamForm from '@/components/team-form';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata = {
	title: 'Home',
	description: 'Home page',
};

export default function Home() {
	return (
		<main className="mx-4 sm:mx-10 lg:mx-20 my-12">
			<Hero />
			<div className="flex items-center justify-center">
				<Link
					href="/team"
					className={buttonVariants('link')}
				>
					Register your team
				</Link>
			</div>
			{/* <Suspense fallback={<SkeletonTeamContainer />}>
				<RegisteredTeams />
			</Suspense> */}

			{/* <RegisterParticipants /> */}
		</main>
	);
}
