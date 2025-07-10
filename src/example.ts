import { GofileAPI, type FileToUpload } from "./index.js";
import { readFile } from "fs/promises";

async function multipleUploadExample() {
    console.log("- Gofile Multiple Upload Example");
    console.log("====================================\n");

    const api = new GofileAPI({});

    try {
        const files: FileToUpload[] = [
            {
                file: Buffer.from("Hello, this is file 1 content"),
                fileName: "test-file-1.txt",
            },
            {
                file: Buffer.from("Hello, this is file 2 content"),
                fileName: "test-file-2.txt",
            },
            {
                file: Buffer.from("Hello, this is file 3 content"),
                fileName: "test-file-3.txt",
            },
        ];

        console.log(`- Uploading ${files.length} files...`);
        console.log("Files to upload:");
        files.forEach((file, index) => {
            console.log(
                `   ${index + 1}. ${file.fileName} (${file.file.length} bytes)`,
            );
        });
        console.log();

        console.log("- Method 1: Sequential upload");
        const sequentialResult = await api.uploadMultipleFiles(files);

        console.log("Sequential upload result:", {
            success: sequentialResult.success,
            totalFiles: files.length,
            successfulUploads: sequentialResult.results.filter((r) => r.success)
                .length,
            folderId: sequentialResult.folderId,
            downloadPage: sequentialResult.downloadPage,
            error: sequentialResult.error,
        });

        if (sequentialResult.success) {
            console.log("- All files uploaded successfully!");
            console.log(
                "- Folder download page:",
                sequentialResult.downloadPage,
            );
            console.log("- Individual file results:");
            sequentialResult.results.forEach((result, index) => {
                if (result.success) {
                    console.log(
                        `   ${files[index].fileName}: ${result.downloadPage}`,
                    );
                } else {
                    console.log(`   ${files[index].fileName}: ${result.error}`);
                }
            });
        } else {
            console.error("Some uploads failed:", sequentialResult.error);
        }

        console.log("\n" + "=".repeat(50) + "\n");
    } catch (error) {
        console.error("Error:", error);
    }
}

multipleUploadExample().catch(console.error);
