import { testEnvironmentVariable } from '../src/settings';

export const indexPage = (req, res) => res.status(200).json({ message: testEnvironmentVariable });