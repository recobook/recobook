dev:
	SERVICE_AUTH_KEY=teste SENDGRID_TOKEN="" SENDGRID_EMAIL="" deno run --allow-all --watch src/main.ts
teste:
	SERVICE_AUTH_KEY=teste SENDGRID_TOKEN="" SENDGRID_EMAIL="" deno test --allow-all --quiet test/users.test.ts test/elos.test.ts test/image.test.ts test/video.test.ts test/likes.test.ts