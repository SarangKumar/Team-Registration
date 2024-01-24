'use client';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';

const TeamNotRegistered = () => {
	const [remainingSeconds, setRemainingSeconds] = useState(10);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingSeconds(remainingSeconds - 1);
		}, 1000);
        console.log(remainingSeconds)

		return () => clearInterval(interval);
	}, [remainingSeconds]);

	if (remainingSeconds === 0) {
		redirect('/team');
	}

	return (
		<div className="mx-4 my-10 md:max-w-lg md:mx-auto">
			<div className="space-y-4 ">
				<h1 className="text-3xl font-bold">User ID not found!</h1>
				<p className="text-gray-500 dark:text-gray-400">
					Possible Reasons for incorrect user id
				</p>

				<ul className="list-inside list-disc text-sm text-muted-foreground">
					<li>Your team is not registered.</li>
					<li>
						You might have entered incorrect teamId while
						registering new participant.
					</li>
				</ul>
				<Link
					className={buttonVariants()}
					href="/team"
				>
					Register your Team Now
				</Link>
				<p>You will be redirected in {remainingSeconds} seconds</p>
			</div>
		</div>
	);
};

export default TeamNotRegistered;
