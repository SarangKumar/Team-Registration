import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function transformUserData(inputData){
   const result = [];
   console.log(inputData)

   for (let i = 0; i < inputData.length; i += 5) {
		const entry = {
			name: inputData[i].value,
			email: inputData[i + 1].value,
			srn: inputData[i + 2].value,
			sem: inputData[i + 3].value,
			phone: inputData[i + 4].value,
		};

		result.push(entry);
   }

   return result;
} 

export const membersPerTeam = 4;