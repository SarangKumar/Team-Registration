'use server';
import * as z from "zod";
import { revalidatePath } from 'next/cache';
import prisma from "@/prisma/prisma";
import { redirect } from "next/navigation";

// export const formTeamSchema = z.object({
// 	team_name: z.string().min(1).max(50, {
// 		message: 'Team name must be between 1 and 50 characters',
// 	}),
// 	description: z.string().min(10).max(500, {
// 		message: 'Description must be between 10 and 500 characters',
// 	}),
// });



export async function onTeamSubmit(formData) {
	'use server'
	let newTeam = null;
	try {
		const team_name = formData.get('team_name');
		const description = formData.get('description');
		const solution = formData.get('solution');
		prisma.$connect();
		newTeam = await prisma.team.create({
			data: {
				team_name,
				description,
				solution,
			},
		});

		// console.log(newTeam);
		console.log(newTeam.id)
		redirect(`/home`);
		
		// revalidatePath('/');
	} catch (error) {
		console.log(error.message);

	} finally {
		prisma.$disconnect();
	}
	newTeam && redirect(`/team/${newTeam.id}`);
}
