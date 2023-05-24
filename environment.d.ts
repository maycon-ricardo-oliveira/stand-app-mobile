declare global {
  namespace NodeJS {
    interface ProcessEnv {
			STANDAPP_API_URL: 'http://localhost:80/api/v1';
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {}
