import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const UPLOAD_DIR = path.join(process.cwd(), "upload");
const MAX_FILES = 10;
const ALLOWED_MIME_TYPES = new Set([
	"image/jpeg",
	"image/png",
	"image/webp",
	"image/jpg",
	"application/pdf"
]);

const jsonResponse = (data, status = 200) => NextResponse.json(data, { status });

const sanitizeFilename = (name) => name.replace(/[^a-zA-Z0-9._-]/g, "_");

export const POST = async (request) => {
	try {
		const formData = await request.formData();
		const files = formData.getAll("file");

		if (!files || files.length === 0) {
			return jsonResponse({ status: 400, message: "No files uploaded" }, 400);
		}

		if (files.length > MAX_FILES) {
			return jsonResponse(
				{ status: 400, message: `Max ${MAX_FILES} files allowed` },
				400
			);
		}

		await mkdir(UPLOAD_DIR, { recursive: true });

		const savedFiles = [];

		for (const file of files) {
			if (!file || typeof file.arrayBuffer !== "function") {
				return jsonResponse({ status: 400, message: "Invalid file" }, 400);
			}

			if (!ALLOWED_MIME_TYPES.has(file.type)) {
				return jsonResponse(
					{ status: 400, message: "Only image and PDF files are allowed" },
					400
				);
			}

			const timestamp = new Date().toISOString().replace(/:/g, "-");
			const safeName = sanitizeFilename(file.name || "file");
			const filename = `${timestamp}-${safeName}`;
			const filePath = path.join(UPLOAD_DIR, filename);
			const buffer = Buffer.from(await file.arrayBuffer());

			await writeFile(filePath, buffer);

			savedFiles.push({
				filename,
				originalname: file.name,
				mimetype: file.type,
				size: buffer.length
			});
		}

		return jsonResponse(
			{
				status: 201,
				message: "Files uploaded successfully",
				...savedFiles[0],
				files: savedFiles
			},
			201
		);
	} catch (error) {
		return jsonResponse({ error: error.message }, 500);
	}
};
