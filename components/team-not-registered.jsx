'use client';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';

const TeamNotRegistered = () => {
	const [remainingSeconds, setRemainingSeconds] = useState(5);

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
		<div className="mx-auto max-w-lg space-y-6">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">Register Your Team</h1>
				<p className="text-gray-500 dark:text-gray-400">
					Your team is not registered. Kindly register your team first
					to add members.
				</p>
                <Link className={buttonVariants()} href="/team">Register your Team Now</Link>
				<p>You will be redirected in {remainingSeconds}</p>
			</div>
		</div>
	);
};

export default TeamNotRegistered;
