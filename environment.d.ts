declare global {
  namespace NodeJS {
    interface ProcessEnv {
			STANDAPP_API_URL: 'http://127.0.0.1:80/api/v1';
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {}
