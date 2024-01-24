const { PrismaClient } = require('@prisma/client');
const { teams, participants } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
	try {
		await prisma.participant.deleteMany();
		console.log('Deleted participant records');
		await prisma.team.deleteMany();
		console.log('Deleted team records');

		await prisma.team.createMany({
			data: teams,
		});
		console.log('team data');

		await prisma.participant.createMany({
			data: participants,
		});
		console.log('participant data');
	} catch (e) {
		console.error(e);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
};

load();
