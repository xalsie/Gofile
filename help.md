# API for Gofile.com

Upload files to Gofile.com and get a link to the uploaded file.

> POST - https://api.gofile.io/contents/createfolder

```
{
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer Ix4PCO1B3N0J3bRvCOC0y8SWFFMERXWQ'
    },
    body: JSON.stringify({
        "parentFolderId": "ce48ebc2-567d-49aa-b760-dd9a720b9204", // "uuid",
        "public": true
    })
}
```

> response:

```
{
    "status": "ok",
    "data": {
        "id": "e2abdd82-b3b3-4806-9993-1009a7173ee7",
        "owner": "b43026b9-7d06-4589-b34b-67ff17e7a2ca",
        "type": "folder",
        "name": "7BTowf",
        "parentFolder": "ce48ebc2-567d-49aa-b760-dd9a720b9204",
        "createTime": 1752156575,
        "modTime": 1752156575,
        "code": "7BTowf"
    }
}
```

> POST - https://upload.gofile.io/uploadfile

```
{
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    body: JSON.stringify({
        "token": "Ix4PCO1B3N0J3bRvCOC0y8SWFFMERXWQ",
        "folderId": "folderId": "e2abdd82-b3b3-4806-9993-1009a7173ee7", // response.data.id,
        "file": (binary)
    })
}
```

> response:

```
{
    "data": {
        "createTime": 1752156576,
        "downloadPage": "https://gofile.io/d/7BTowf",
        "guestToken": "Ix4PCO1B3N0J3bRvCOC0y8SWFFMERXWQ",
        "id": "84a12110-1e1e-4b41-abde-d94b4d46433e",
        "md5": "a71684bd024592c89bb9953ce38096e8",
        "mimetype": "image/png",
        "modTime": 1752156576,
        "name": "LGZ_graffiti_0.1.6.png",
        "parentFolder": "e2abdd82-b3b3-4806-9993-1009a7173ee7",
        "parentFolderCode": "7BTowf",
        "servers": [
            "store2"
        ],
        "size": 2921360,
        "type": "file"
    },
    "status": "ok"
}
```

# Settings

- Direct Links: 0
- Public: Yes
- Password Protected: No
- Description: N/A
- Expires: N/A
- Tags: N/A
