import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import { API_URL, getAuthUrl } from '@/shared/config/api.config';

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				email: { label: 'Email', type: 'email', placeholder: 'test@gmail.com' },
				password: { label: 'Password', type: 'password' },
			},

			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) return null;
				const { email, password } = credentials;

				const res = await fetch(`${API_URL}${getAuthUrl('/auth/login')}`, {
					method: 'POST',
					body: JSON.stringify({
						email,
						password,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (res.status === 401) {
					return null;
				}

				const user = await res.json();
				return user;
			},
		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
