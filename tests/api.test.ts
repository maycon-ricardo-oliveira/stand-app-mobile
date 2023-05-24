import axios from "axios";
import {describe, expect, test} from '@jest/globals';


test("Deve testar a API", async function () {
	const response = await axios.get("http://localhost:80/api/v1/health");
	const output = response.data;
	expect(output.status).toBe(200);
	expect(output.data).toBe("Up and Running");
	expect(output.project).toBe("stand-app");
});