import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { redirect } from 'next/navigation';
import React from 'react';

const LoginUserPage = () => {
	const submitHandler = async (formData) => {
		'use server';
		const teamId = formData.get('teamId');
    redirect(`/team/${teamId}`);
	};
	return (
		<div className="mx-4 my-10 md:max-w-lg md:mx-auto">
			<h1 className="tracking-tighter text-2xl font-bold mb-3">
				Login Team
			</h1>
			<form
				action={submitHandler}
				className="space-y-2 md:space-y-4"
			>
				<Label htmlFor="teamId">Team ID</Label>
				<Input
					id="teamId"
					name="teamId"
					placeholder="Team ID"
				/>
				<Button type="submit">Register New User</Button>
			</form>
		</div>
	);
};

export default LoginUserPage;
