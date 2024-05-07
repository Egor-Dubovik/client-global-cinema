import { LoginForm } from '@/features/Auth';

import { Heading } from '@/shared/UI/Heading';

export default function Login() {
	return (
		<>
			<Heading title="Login" className="mb-6" />
			<LoginForm />
		</>
	);
}
