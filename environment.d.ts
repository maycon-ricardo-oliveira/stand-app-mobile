declare global {
  namespace NodeJS {
    interface ProcessEnv {
			STANDAPP_API_URL: 'http://127.0.0.1:80/api/v1';
      NODE_ENV: 'development' | 'production';
      GOOGLE_PUBLIC_API_KEY: 'AIzaSyA7GkFRNZV9wSIM3WVyBi0O_e2woROkAuo',
    }
  }
}

export {}
