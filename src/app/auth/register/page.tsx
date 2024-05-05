import { RegisterForm } from '@/features/Auth';

import { Heading } from '@/shared/UI/Heading';

export default function Register() {
	return (
		<>
			<Heading title="Login" className="mb-6" />
			<RegisterForm />
		</>
	);
}
