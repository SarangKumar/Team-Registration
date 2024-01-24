import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import SubmitButton from './submit-button';
import { membersPerTeam } from '@/lib/utils';
import { Badge } from './ui/badge';
import { revalidatePath } from 'next/cache';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { CheckCircle } from 'lucide-react';

const RegisterParticipants = ({ team }) => {
	// console.log(team, 'out')
	const addParticipant = async (formData) => {
		'use server';
		const formDataEntries = Object.fromEntries(formData.entries());
		// console.log(team, 'in')

		const srn_1 = formDataEntries.srn_1;
		const srn_2 = formDataEntries.srn_2;
		const srn_3 = formDataEntries.srn_3;
		const srn_4 = formDataEntries.srn_4;

		if (srn_1) {
			await prisma.participant.create({
				data: {
					name: formDataEntries.name_1,
					email: formDataEntries.email_1,
					srn: formDataEntries.srn_1,
					phone: formDataEntries.phone_1,
					sem: +formDataEntries.sem_1,
					github_url: 'www.github.com/'+formDataEntries.github_1,
					team_id: team.id,
				},
			});
			console.log('Participant 1 added');
		}
		if (srn_2) {
			await prisma.participant.create({
				data: {
					name: formDataEntries.name_2,
					email: formDataEntries.email_2,
					srn: formDataEntries.srn_2,
					phone: formDataEntries.phone_2,
					sem: +formDataEntries.sem_2,
					github_url: 'www.github.com/' + formDataEntries.github_2,
					team_id: team.id,
				},
			});
			console.log('Participant 2 added');
		}
		if (srn_3) {
			await prisma.participant.create({
				data: {
					name: formDataEntries.name_3,
					email: formDataEntries.email_3,
					srn: formDataEntries.srn_3,
					phone: formDataEntries.phone_3,
					sem: +formDataEntries.sem_3,
					github_url: 'www.github.com/' + formDataEntries.github_3,
					team_id: team.id,
				},
			});
			console.log('Participant 3 added');
		}
		if (srn_4) {
			await prisma.participant.create({
				data: {
					name: formDataEntries.name_4,
					email: formDataEntries.email_4,
					srn: formDataEntries.srn_4,
					phone: formDataEntries.phone_4,
					sem: +formDataEntries.sem_4,
					github_url: 'www.github.com/' + formDataEntries.github_4,
					team_id: team.id,
				},
			});
			console.log('Participant 4 added');
		}
		revalidatePath(`/team/${team.id}`);
	};

	const registeredMembersCount = team.members.length;
	return (
		<>
			<h1 className="tracking-tighter text-3xl font-bold mb-3">
				Register Participants ({registeredMembersCount}/{membersPerTeam}
				)
			</h1>

			<form
				action={addParticipant}
				className=""
			>
				<div className="space-y-10 my-10">
					{Array(membersPerTeam)
						.fill(0)
						.map((_, i) => (
							<RegisterParticipant
								key={i}
								registeredMembersCount={registeredMembersCount}
								index={i + 1}
								members={team.members}
							/>
						))}
				</div>
				{registeredMembersCount !== membersPerTeam ? (
					<SubmitButton>Register Members</SubmitButton>
				) : (
					<Alert variant="">
						<CheckCircle className="h-4 w-4" />
						<AlertTitle>Registrations Done</AlertTitle>
						<AlertDescription>
							All {membersPerTeam} are registered for{' '}
							{team.team_name}
						</AlertDescription>
					</Alert>
				)}
			</form>
		</>
	);
};

export default RegisterParticipants;

const RegisterParticipant = ({ index, registeredMembersCount, members }) => {
	return (
		<div>
			<h2 className="font-semibold text-xl tracking-tight flex items-center">
				Participant {index}{' '}
				{index <= registeredMembersCount && (
					<Badge className="ml-2">Registered</Badge>
				)}
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-2">
				<div>
					<Label htmlFor={`name${index}`}>Name</Label>
					<Input
						defaultValue={
							index <= registeredMembersCount
								? members[index - 1].name
								: ''
						}
						disabled={index <= registeredMembersCount}
						type="text"
						// readOnly={index <= registeredMembersCount}
						id={`name${index}`}
						name={`name_${index}`}
						placeholder="Jane Doe"
					/>
				</div>
				<div>
					<Label htmlFor={`email${index}`}>Email</Label>
					<Input
						defaultValue={
							index <= registeredMembersCount
								? members[index - 1].email
								: ''
						}
						// readOnly={index <= registeredMembersCount}
						disabled={index <= registeredMembersCount}
						type="email"
						id={`email${index}`}
						name={`email_${index}`}
						placeholder="jane@doe@gmail.com"
					/>
				</div>
				<div>
					<Label htmlFor={`srn${index}`}>SRN</Label>
					<Input
						defaultValue={
							index <= registeredMembersCount
								? members[index - 1].srn
								: ''
						}
						disabled={index <= registeredMembersCount}
						// readOnly={index <= registeredMembersCount}
						type="text"
						id={`srn${index}`}
						name={`srn_${index}`}
						placeholder="PES1UG2XXXXXX"
					/>
				</div>
				<div>
					<Label htmlFor={`sem${index}`}>Semester</Label>
					<Input
						defaultValue={
							index <= registeredMembersCount
								? members[index - 1].sem
								: ''
						}
						disabled={index <= registeredMembersCount}
						type="number"
						// readOnly={index <= registeredMembersCount}
						id={`sem${index}`}
						min={1}
						max={8}
						name={`sem_${index}`}
						placeholder="1"
					/>
				</div>

				<div>
					<Label htmlFor={`phone${index}`}>Phone Number</Label>
					<Input
						type="tel"
						defaultValue={
							index <= registeredMembersCount
								? members[index - 1].phone
								: ''
						}
						disabled={index <= registeredMembersCount}
						// readOnly={index <= registeredMembersCount}
						pattern="[0-9]{10}"
						name={`phone_${index}`}
						id={`phone${index}`}
						placeholder="9400000000"
					/>
				</div>
				<div>
					<Label htmlFor={`github${index}`}>Github Username</Label>
					<div className='relative'>

					<span className='text-sm  absolute left-3 top-2.5'>www.github.com/</span>
					<Input
						defaultValue={
							index <= registeredMembersCount
								? members[index - 1].url
								: ''
						}
						disabled={index <= registeredMembersCount}
						className="pl-32"
						name={`github_${index}`}
						// readOnly={index <= registeredMembersCount}
						id={`github${index}`}
						placeholder="john_doe"
					/>
					</div>
				</div>
			</div>
		</div>
	);
};
