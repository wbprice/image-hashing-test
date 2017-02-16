# image-hashing-test

Demonstrates an issue with hashing stringified images using `crypto`.  

## Usage

```bash
node index.js
```

This script hashes an image in two different ways.  One method stringifies the image prior to hashing, the other does not.  
The two hashes should be identical. Running the script results in an assertion error:
```
AssertionError: '4079763ecdb2bb98fd0bf415a9b5f19c' == 'c6c450763e4584acc95b87d7a518ea5c'
```
