import TeamForm from '@/components/team-form';
import React from 'react'

export const metadata = {
	title: "Team Registration",
	description: "Register your team for the event"
}

const TeamRegistration = () => {
  return (
		<div className='mx-4 my-10 md:max-w-lg md:mx-auto'>
			<TeamForm />
		</div>
  );
}

export default TeamRegistration