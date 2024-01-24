import prisma from '@/prisma/prisma';
import React from 'react';
import { Skeleton } from './ui/skeleton';

const RegisteredTeams = async () => {
	let teams = [];
	try {
		prisma.$connect();
		teams = await prisma.team.findMany({
			// include: {
			// 	members: true,
			// },
		});
		console.log(teams);
	} catch (error) {
		console.log(error.message);
	} finally {
		prisma.$disconnect();
	}
	return (
		<div>
			<h1 className="tracking-tighter text-2xl font-bold ">
				Registered Teams
			</h1>
			{JSON.stringify(teams)}
		</div>
	);
};

export default RegisteredTeams;