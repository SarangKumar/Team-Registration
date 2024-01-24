// 'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';

// import {
// 	Form,
// 	FormControl,
// 	FormDescription,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { onTeamSubmit } from '@/action';
import { Textarea } from './ui/textarea';
import SubmitButton from './submit-button';
import { Label } from './ui/label';
import { Button } from './ui/button';
import Link from 'next/link';

// const [state,formAction]= useFormState(createTeam, initialState);
export const TeamForm = () => {
	// const team_form = useForm({
	// 	resolver: zodResolver(formTeamSchema),
	// 	defaultValues: {
	// 		team_name: '',
	// 		description: '',
	// 	},
	// });

	return (
		<>
			{/* <Form {...team_form}>
				<form
					action={team_form.handleSubmit(onTeamSubmit)}
					className="space-y-8 p-2 md:px-8"
				>
					<FormField
						control={team_form.control}
						name="team_name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Team Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Team Name..."
									/>
								</FormControl>
                  <FormDescription>
                  Your team name will be publically displayed
                  </FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={team_form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										placeholder="Tell something about yourself..."
									/>
								</FormControl>
                  <FormDescription>
                  Your team description will be publically displayed
                  </FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<SubmitButton />
				</form>
			</Form> */}
			<h1 className="tracking-tighter text-2xl font-bold mb-3">
				Register Your Team
			</h1>
			<form
				action={onTeamSubmit}
				className="space-y-2 md:space-y-4"
			>
				<div className="grid grid-cols-1 gap-2 md:gap-4">
					<div>
						<Label htmlFor="t_name">Team Name</Label>
						<Input
							id="t_name"
							name="team_name"
							required
							placeholder="Team Name..."
						/>
					</div>
					<div>
						<Label htmlFor="solution">Solution Ppt link</Label>
						<Input
							type="url"
							id="solution"
							name="solution"
							required
							placeholder="https://docs.google.com/presentation/d/1eFWbSOcjhkkj"
						/>
					</div>
				</div>
				{/* <FormDescription>
					Your team name will be pubically available
				</FormDescription> */}
				<div>
					<Label htmlFor="description">Description</Label>
					<Textarea
						id="description"
						name="description"
						required
						placeholder="Tell something about yourself..."
					/>
				</div>
				<div className="space-x-2 md:space-y-2">
					<SubmitButton className="md:w-full">
						Create Team
					</SubmitButton>
					<Button
						variant="outline"
						asChild
						className="md:w-full"
					>
						<Link href="/register">
							Register Member to Existing Team
						</Link>
					</Button>
				</div>
			</form>
		</>
	);
};

export default TeamForm;
